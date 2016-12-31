## Notes

I think <https://ace.c9.io/#nav=api&api=edit_session> is a complete list of the public API for `VirtualRenderer`. In particular look at `setSession`

## All variables stored on `VirtualRenderer`

    this.container = container || dom.createElement("div");
    this.scroller = dom.createElement("div");
    this.content = dom.createElement("div");
    this.canvas = textLayer.element;
    this.scrollBar = 
    this.scrollBarV = new VScrollBar(this.container, this);
    this.scrollBarH = new HScrollBar(this.container, this);
    this.scrollTop = 0;
    this.scrollLeft = 0;
    this.cursorPos = {
    this.layerConfig = {
    this.scrollMargin = {
    this.updateCharacterSize = function() {
    this.characterWidth = this.$textLayer.getCharacterWidth();
    this.lineHeight = this.$textLayer.getLineHeight();
    this.setSession = function(session) {
    this.session = session;
    this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this);
    this.updateLines = function(firstRow, lastRow, force) {
    this.onChangeNewLineMode = function() {
    this.onChangeTabSize = function() {
    this.updateText = function() {
    this.updateFull = function(force) {
    this.updateFontSize = function() {
    this.onResize = function(force, gutterWidth, width, height) {
    this.resizing = force ? 1 : 0;
    this.resizing = 0;
    this.resizing = 0;
    this.gutterWidth = gutterWidth;
    this.onGutterResize = function() {
    this.adjustWrapLimit = function() {
    this.setAnimatedScroll = function(shouldAnimate){
    this.getAnimatedScroll = function() {
    this.setShowInvisibles = function(showInvisibles) {
    this.getShowInvisibles = function() {
    this.getDisplayIndentGuides = function() {
    this.setDisplayIndentGuides = function(display) {
    this.setShowPrintMargin = function(showPrintMargin) {
    this.getShowPrintMargin = function() {
    this.setPrintMarginColumn = function(showPrintMargin) {
    this.getPrintMarginColumn = function() {
    this.getShowGutter = function(){
    this.setShowGutter = function(show){
    this.getFadeFoldWidgets = function(){
    this.setFadeFoldWidgets = function(show) {
    this.setHighlightGutterLine = function(shouldHighlight) {
    this.getHighlightGutterLine = function() {
    this.getContainerElement = function() {
    this.getMouseEventTarget = function() {
    this.getTextAreaContainer = function() {
    this.getFirstVisibleRow = function() {
    this.getFirstFullyVisibleRow = function() {
    this.getLastFullyVisibleRow = function() {
    this.getLastVisibleRow = function() {
    this.setPadding = function(padding) {
    this.setScrollMargin = function(top, bottom, left, right) {
    this.getHScrollBarAlwaysVisible = function() {
    this.setHScrollBarAlwaysVisible = function(alwaysVisible) {
    this.getVScrollBarAlwaysVisible = function() {
    this.setVScrollBarAlwaysVisible = function(alwaysVisible) {
    this.freeze = function() {
    this.unfreeze = function() {
    this.scrollTop = st;
    this.desiredHeight = desiredHeight;
    this.layerConfig = {
    this.updateFrontMarkers = function() {
    this.updateBackMarkers = function() {
    this.addGutterDecoration = function(row, className){
    this.removeGutterDecoration = function(row, className){
    this.updateBreakpoints = function(rows) {
    this.setAnnotations = function(annotations) {
    this.updateCursor = function() {
    this.hideCursor = function() {
    this.showCursor = function() {
    this.scrollSelectionIntoView = function(anchor, lead, offset) {
    this.scrollCursorIntoView = function(cursor, offset, $viewMargin) {
    this.getScrollTop = function() {
    this.getScrollLeft = function() {
    this.getScrollTopRow = function() {
    this.getScrollBottomRow = function() {
    this.scrollToRow = function(row) {
    this.alignCursor = function(cursor, alignment) {
    this.STEPS = 8;
    this.scrollToLine = function(line, center, animate, callback) {
    this.animateScrolling = function(fromValue, callback) {
    this.scrollToY = function(scrollTop) {
    this.scrollTop = scrollTop;
    this.scrollToX = function(scrollLeft) {
    this.scrollLeft = scrollLeft;
    this.scrollTo = function(x, y) {
    this.scrollBy = function(deltaX, deltaY) {
    this.isScrollableBy = function(deltaX, deltaY) {
    this.pixelToScreenCoordinates = function(x, y) {
    this.screenToTextCoordinates = function(x, y) {
    this.textToScreenCoordinates = function(row, column) {
    this.visualizeFocus = function() {
    this.visualizeBlur = function() {
    this.showComposition = function(position) {
    this.setCompositionText = function(text) {
    this.hideComposition = function() {
    this.setTheme = function(theme, cb) {
    this.getTheme = function() {
    this.setStyle = function(style, include) {
    this.unsetStyle = function(style) {
    this.setCursorStyle = function(style) {
    this.setMouseCursor = function(cursorStyle) {
    this.destroy = function() {


## All calls on `session`

        _self.session.setScrollTop(e.data - _self.scrollMargin.top);

        _self.session.setScrollLeft(e.data - _self.scrollMargin.left);

        this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode);

      if (session && this.scrollMargin.top && session.getScrollTop() <= 0)

        session.setScrollTop(-this.scrollMargin.top);

      this.session.$setFontMetrics(this.$fontMetrics);

      this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode);

        if (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || force)

      if (this.session.getUseWrapMode() && this.adjustWrapLimit()) {

      return this.session.adjustWrapLimit(limit, this.$showPrintMargin && this.$printMarginColumn);

      if (this.session.getUseWrapMode()) {

        var cursor = this.session.selection.getCursor();

        height *= this.session.getRowLength(cursor.row);

      if (this.session && this.session.$wrap == -1)

        w *= (this.session.$getStringScreenWidth(val)[0]+2);

      var top = this.session.documentToScreenRow(lastRow, 0) * config.lineHeight;

      if (top - this.session.getScrollTop() > config.height - config.lineHeight)

        this.session.setScrollTop(-sm.top);

    var height = this.session.getScreenLength() * this.lineHeight;

    var screenLines = this.session.getScreenLength();

          this.session.setScrollTop(Math.max(-sm.top,

          this.session.setScrollLeft(Math.max(-sm.left, Math.min(this.scrollLeft, 

          firstRow = session.screenToDocumentRow(firstRow, 0);

          var foldLine = session.getFoldLine(firstRow);

          firstRowScreen = session.documentToScreenRow(firstRow, 0);

          firstRowHeight = session.getRowLength(firstRow) * lineHeight;

          lastRow = Math.min(session.screenToDocumentRow(lastRow, 0), session.getLength() - 1);

          minHeight = size.scrollerHeight + session.getRowLength(lastRow) * lineHeight +

          var charCount = this.session.getScreenWidth();

          if (this.showInvisibles && !this.session.$useWrapMode)

          this.$markerFront.setMarkers(this.session.getMarkers(true));

          this.$markerBack.setMarkers(this.session.getMarkers());

          var scrollTop = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;

            this.session.setScrollTop(top);

            this.session.setScrollTop(top + this.lineHeight - this.$size.scrollerHeight);

            this.session.setScrollLeft(left);

            this.session.setScrollLeft(Math.round(left + this.characterWidth - this.$size.scrollerWidth));

            this.session.setScrollLeft(0);

          return this.session.getScrollTop();

          return this.session.getScrollLeft();

          this.session.setScrollTop(row * this.lineHeight);

          this.session.setScrollTop(offset);

          this.session.setScrollTop(offset);

          _self.session.setScrollTop(steps.shift());

          _self.session.$scrollTop = toValue;

              _self.session.setScrollTop(steps.shift());

              _self.session.$scrollTop = toValue;

              _self.session.$scrollTop = -1;

              _self.session.setScrollTop(toValue);

          this.session.setScrollTop(y);

          this.session.setScrollLeft(y);

          deltaY && this.session.setScrollTop(this.session.getScrollTop() + deltaY);

          deltaX && this.session.setScrollLeft(this.session.getScrollLeft() + deltaX);

          if (deltaY < 0 && this.session.getScrollTop() >= 1 - this.scrollMargin.top)

         if (deltaY > 0 && this.session.getScrollTop() + this.$size.scrollerHeight

         if (deltaX < 0 && this.session.getScrollLeft() >= 1 - this.scrollMargin.left)

        if (deltaX > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth

      return this.session.screenToDocumentPosition(row, Math.max(col, 0));

      var pos = this.session.documentToScreenPosition(row, column);
