import { Component, OnInit } from '@angular/core';

declare var mxClient, mxUtils, mxDivResizer, mxCellOverlay,
  mxConstants, mxEvent, mxGraph, mxOutline, mxEdgeStyle, mxPoint, mxImage,
  mxCompactTreeLayout, mxLayoutManager, mxKeyHandler, mxToolbar, mxPrintPreview, mxWindow;

@Component({
  selector: 'app-designer-worspace',
  templateUrl: './designer-worspace.component.html',
  styleUrls: ['./designer-worspace.component.scss']
})
export class DesignerWorspaceComponent implements OnInit {
constructor() {
    mxConstants.SHADOWCOLOR = '#C0C0C0';
  }

  ngOnInit() {
    this.main()

  }

  main() {
    // Checks if browser is supported
    if (!mxClient.isBrowserSupported()) {
      // Displays an error message if the browser is
      // not supported.
      mxUtils.error('Browser is not supported!', 200, false);
    }
    else {
      // Workaround for Internet Explorer ignoring certain styles
      var container = document.getElementById('sampleDiv');
      container.style.position = 'absolute';
      container.style.overflow = 'hidden';
      container.style.left = '250px';
      container.style.top = '51px';
      container.style.right = '0px';
      container.style.bottom = '0px';
      container.style.zIndex = "2";
      var outline = document.getElementById('outlineContainer');
      mxEvent.disableContextMenu(container);
      if (mxClient.IS_QUIRKS) {
        // document.body.style.overflow = 'hidden';
        // document.
        new mxDivResizer(container);
        new mxDivResizer(outline);
      }
      // Sets a gradient background
      if (mxClient.IS_GC || mxClient.IS_SF) {
        container.style.background = '-webkit-gradient(linear, 0% 0%, 0% 100%, from(#FFFFFF), to(#E7E7E7))';
      }
      else if (mxClient.IS_NS) {
        container.style.background = '-moz-linear-gradient(top, #FFFFFF, #E7E7E7)';
      }
      else if (mxClient.IS_IE) {
        container.style.filter = 'progid:DXImageTransform.Microsoft.Gradient(' +
          'StartColorStr=\'#FFFFFF\', EndColorStr=\'#E7E7E7\', GradientType=0)';
      }
      document.body.appendChild(container);
      // Creates the graph inside the given container
      var graph = new mxGraph(container);

      // Enables automatic sizing for vertices after editing and
      // panning by using the left mouse button.
      graph.setCellsMovable(false);
      graph.setAutoSizeCells(true);
      graph.setPanning(false);
      graph.centerZoom = false;
      graph.panningHandler.useLeftButtonForPanning = true;
      // Displays a popupmenu when the user clicks
      // on a cell (using the left mouse button) but
      // do not select the cell when the popup menu
      // is displayed
      graph.panningHandler.popupMenuHandler = false;
      // Creates the outline (navigator, overview) for moving
      // around the graph in the top, right corner of the window.
      var outln = new mxOutline(graph, outline);

      // Disables tooltips on touch devices
      graph.setTooltips(!mxClient.IS_TOUCH);
      // Set some stylesheet options for the visual appearance of vertices
      var style = graph.getStylesheet().getDefaultVertexStyle();
      style[mxConstants.STYLE_SHAPE] = 'label';

      style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
      style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_LEFT;
      style[mxConstants.STYLE_SPACING_LEFT] = 10;

      style[mxConstants.STYLE_GRADIENTCOLOR] = '#7d85df';
      style[mxConstants.STYLE_STROKECOLOR] = '#5d65df';
      style[mxConstants.STYLE_FILLCOLOR] = '#adc5ff';

      style[mxConstants.STYLE_FONTCOLOR] = '#1d258f';
      style[mxConstants.STYLE_FONTFAMILY] = 'Verdana';
      style[mxConstants.STYLE_FONTSIZE] = '12';
      style[mxConstants.STYLE_FONTSTYLE] = '1';

      style[mxConstants.STYLE_SHADOW] = '1';
      style[mxConstants.STYLE_ROUNDED] = '1';
      style[mxConstants.STYLE_GLASS] = '1';

      style[mxConstants.STYLE_IMAGE] = 'assests/camera.png';
      style[mxConstants.STYLE_IMAGE_WIDTH] = '48';
      style[mxConstants.STYLE_IMAGE_HEIGHT] = '30';
      style[mxConstants.STYLE_SPACING] = 8;
      // Sets the default style for edges
      style = graph.getStylesheet().getDefaultEdgeStyle();
      style[mxConstants.STYLE_ROUNDED] = true;
      style[mxConstants.STYLE_STROKEWIDTH] = 3;
      style[mxConstants.STYLE_EXIT_X] = 0.5; // center
      style[mxConstants.STYLE_EXIT_Y] = 1.0; // bottom
      style[mxConstants.STYLE_EXIT_PERIMETER] = 0; // disabled
      style[mxConstants.STYLE_ENTRY_X] = 0.5; // center
      style[mxConstants.STYLE_ENTRY_Y] = 0; // top
      style[mxConstants.STYLE_ENTRY_PERIMETER] = 0; // disabled

      // Disable the following for straight lines
      style[mxConstants.STYLE_EDGE] = mxEdgeStyle.TopToBottom;
      // Stops editing on enter or escape keypress
      var keyHandler = new mxKeyHandler(graph);
      // Enables automatic layout on the graph and installs
      // a tree layout for all groups who's children are
      // being changed, added or removed.
      var layout = new mxCompactTreeLayout(graph, false);
      layout.useBoundingBox = false;
      layout.edgeRouting = false;
      layout.levelDistance = 60;
      layout.nodeDistance = 16;
      // Allows the layout to move cells even though cells
      // aren't movable in the graph
      layout.isVertexMovable = function (cell) {
        return true;
      };
      var layoutMgr = new mxLayoutManager(graph);
      layoutMgr.getLayout = function (cell) {
        if (cell.getChildCount() > 0) {
          return layout;
        }
      };
      // Installs a popupmenu handler using local function (see below).
      graph.popupMenuHandler.factoryMethod = function (menu, cell, evt) {
        return this.createPopupMenu(graph, menu, cell, evt);
      };
      // Fix for wrong preferred size
      var oldGetPreferredSizeForCell = graph.getPreferredSizeForCell;
      graph.getPreferredSizeForCell = function (cell) {
        var result = oldGetPreferredSizeForCell.apply(this, arguments);
        if (result != null) {
          result.width = Math.max(120, result.width - 40);
        }
        return result;
      };

      // Sets the maximum text scale to 1
      graph.cellRenderer.getTextScale = function (state) {
        return Math.min(1, state.view.scale);
      };
      // Dynamically adds text to the label as we zoom in
      // (without affecting the preferred size for new cells)
      graph.cellRenderer.getLabelValue = function (state) {
        var result = state.cell.value;

        if (state.view.graph.getModel().isVertex(state.cell)) {
          if (state.view.scale > 1) {
            result += '\nDetails 1';
          }

          if (state.view.scale > 1.3) {
            result += '\nDetails 2';
          }
        }

        return result;
      };
      // Gets the default parent for inserting new cells. This
      // is normally the first child of the root (ie. layer 0).
      var parent = graph.getDefaultParent();
      // Adds the root vertex of the tree
      graph.getModel().beginUpdate();
      try {
        var w = graph.container.offsetWidth;
        var v1 = graph.insertVertex(parent, 'treeRoot',
          'Organization', w / 2 - 30, 20, 140, 60);
        graph.updateCellSize(v1);
        this.addOverlays(graph, v1, false);
      }
      finally {
        // Updates the display
        graph.getModel().endUpdate();
      }
      var content = document.getElementById("tools");
      content.style.padding = '4px';
      // content.style.position = "absolute";
      // content.style.top = "55px";
      // content.style.left = "255px";
      // content.style.zIndex = "3"
      // content.style.border = '1px solid black';
      var tb = new mxToolbar(content);
      tb.addItem('Zoom In', 'assets/images/zoom_in-24px.svg', function (evt) {
        graph.zoomIn();
      });
      tb.addItem('Zoom Out', 'assets/images/zoom_out-24px.svg', function (evt) {
        graph.zoomOut();
      });

      // tb.addItem('Actual Size', 'assets/view_1_132.png', function (evt) {
      //   graph.zoomActual();
      // });
      // tb.addItem('Print', 'assets/print32.png', function (evt) {
      //   var preview = new mxPrintPreview(graph, 1);
      //   preview.open();
      // });
      // tb.addItem('Poster Print', 'assets/press32.png', function (evt) {
      //   var pageCount = mxUtils.prompt('Enter maximum page count', '1');
      //   if (pageCount != null) {
      //     var scale = mxUtils.getScaleForPageCount(pageCount, graph);
      //     var preview = new mxPrintPreview(graph, scale);
      //     preview.open();
      //   }
      // });
      let wnd = new mxWindow('Tools', content, 255, 55, 70, 66, false, false);
      console.log(wnd)
      // wnd.content.style.position = "absolute";
      // wnd.content.style.zIndex = "2";
      wnd.setMaximizable(false);
      wnd.setScrollable(false);
      wnd.setResizable(false);
      wnd.setVisible(true);
    }
  };

  createPopupMenu(graph, menu, cell, evt) {
    var model = graph.getModel();
    if (cell != null) {
      if (model.isVertex(cell)) {
        menu.addItem('Add child', 'assests/overlays/check.png', function () {
          this.addChild(graph, cell);
        });
      }
      menu.addItem('Edit label', 'assests/text.gif', function () {
        graph.startEditingAtCell(cell);
      });
      if (cell.id != 'treeRoot' &&
        model.isVertex(cell)) {
        menu.addItem('Delete', '/assests/delete.gif', function () {
          this.deleteSubtree(graph, cell);
        });
      }
      menu.addSeparator();
    }
    menu.addItem('Fit', 'assests/zoom.gif', function () {
      graph.fit();
    });
    menu.addItem('Actual', 'assests/zoomactual.gif', function () {
      graph.zoomActual();
    });
    menu.addSeparator();
    menu.addItem('Print', 'assests/print.gif', function () {
      var preview = new mxPrintPreview(graph, 1);
      preview.open();
    });
    menu.addItem('Poster Print', 'assests/print.gif', function () {
      var pageCount = mxUtils.prompt('Enter maximum page count', '1');
      if (pageCount != null) {
        var scale = mxUtils.getScaleForPageCount(pageCount, graph);
        var preview = new mxPrintPreview(graph, scale);
        preview.open();
      }
    });
  }

  addOverlays(graph, cell, addDeleteIcon) {
    var overlay = new mxCellOverlay(new mxImage('/assets/images/add.svg', 24, 24), 'Add children');
    overlay.cursor = 'hand';
    overlay.align = mxConstants.ALIGN_CENTER;
    overlay.addListener(mxEvent.CLICK, mxUtils.bind(this, function (sender, evt) {
      this.addChild(graph, cell);
    }));

    graph.addCellOverlay(cell, overlay);
    if (addDeleteIcon) {
      overlay = new mxCellOverlay(new mxImage('/assets/images/close-browser.svg', 24, 24), 'Delete');
      overlay.cursor = 'hand';
      overlay.offset = new mxPoint(-10, 8);
      overlay.align = mxConstants.ALIGN_RIGHT;
      overlay.verticalAlign = mxConstants.ALIGN_TOP;
      overlay.addListener(mxEvent.CLICK, mxUtils.bind(this, function (sender, evt) {
        this.deleteSubtree(graph, cell);
      }));

      graph.addCellOverlay(cell, overlay);
      overlay = new mxCellOverlay(new mxImage('assets/copy.png', 30, 30, 'Camera'))

      overlay.offset = new mxPoint(10, 20);
      overlay.cursor = 'hand';
      overlay.align = mxConstants.ALIGN_RIGHT;
      overlay.verticalAlign = mxConstants.ALIGN_TOP;
      overlay.addListener(mxEvent.CLICK, mxUtils.bind(this, function (sender, evt) {
        console.log(graph)
        console.log(cell);
        console.log("hiiiii")
      }));
      graph.addCellOverlay(cell, overlay);

    }
  }

  addChild(graph, cell) {
    var model = graph.getModel();
    var parent = graph.getDefaultParent();
    var vertex;
    model.beginUpdate();
    try {
      vertex = graph.insertVertex(parent, null, 'Double click to set name');
      var geometry = model.getGeometry(vertex);
      // Updates the geometry of the vertex with the
      // preferred size computed in the graph
      var size = graph.getPreferredSizeForCell(vertex);
      geometry.width = size.width;
      geometry.height = size.height;
      // Adds the edge between the existing cell
      // and the new vertex and executes the
      // automatic layout on the parent
      var edge = graph.insertEdge(parent, null, '', cell, vertex);
      // Configures the edge label "in-place" to reside
      // at the end of the edge (x = 1) and with an offset
      // of 20 pixels in negative, vertical direction.
      edge.geometry.x = 1;
      edge.geometry.y = 0;
      edge.geometry.offset = new mxPoint(0, -20);
      this.addOverlays(graph, vertex, true);
    }
    finally {
      model.endUpdate();
    }

    return vertex;
  }

  deleteSubtree(graph, cell) {
    // Gets the subtree from cell downwards
    var cells = [];
    graph.traverse(cell, true, function (vertex) {
      cells.push(vertex);

      return true;
    });
    graph.removeCells(cells);
  }

}
