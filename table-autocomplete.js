$.widget("custom.tableautocomplete", $.ui.autocomplete, {
  
  _renderMenu : function(ul, items) {
    var that = this;

    ul.append(
      $.map(this.options.columns, function(column) {
        return $("<div>")
          .width(column.width)
          .css({
            'float' : 'left',
            'text-align' : 'center'
          })
          .append(
            $("<b>").text(column.header)
          );
      })
    ).append(
      $("<div>").css('clear', 'both')
    );

    $.each(items, function(index, item) {
      that._renderItemData(ul, item);
    });
  },

  _renderItem : function(ul, item) {
    var that = this;
    var regexp = new RegExp('\\b' + this.options.searchTerm, 'ig');
    
    return $("<li>")
      .append(
        $("<a>")
          .append(
            $.map(this.options.columns, function(column) {
              var value = column.getValue(item);
              if (value) {
                value = value.replace(regexp, function(match, n) {
                  return '<b>' + match + '</b>';
                });
              }
              return $("<div>")
                .width(column.width)
                .css({
                  'float' : 'left',
                  'text-align' : 'center'
                })
                .html(value || that.options.placeHolder || "*");
            })
          )
          .append(
            $("<div>").css('clear', 'both')
          )
          .css('padding', '0px')
    )
    .appendTo(ul);
  },
  
  _search : function(value) {
    this.options.searchTerm = value;
    this.pending++;
    this.element.addClass("ui-autocomplete-loading");
    this.cancelSearch = false;
    this.source({ term: value }, this._response());
  },
  
  _init: function() {
    var sumWidth = 0;
    $.each(this.options.columns, function(idx, column) {
      sumWidth += column.width;
    });
    
    sumWidth += 10;
    
    this.options.open = function() {
      $(".ui-menu").width(sumWidth);
    };
  }

});