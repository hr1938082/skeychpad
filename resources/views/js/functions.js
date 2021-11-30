let bold_val = false;
let fontFamily_val = '';
let fontSize_val = '';
let italic_val = false;
let underline_val = false;
let strikethrough_val = false;
let alignLeft_val = false;
let alignCenter_val = false;
let alignRight_val = false;
let alignJustify_val = false;
let orderList_val = false;
let unorderList_val = false;

function fontFamily() {
    var e = document.getElementById("font_family");
    var value = e.options[e.selectedIndex].value;
    fontFamily_val = value;
    return fontFamily_val;
}

function fontSize() {
    var e = document.getElementById("font_size");
    var value = e.options[e.selectedIndex].value;
    fontSize_val = value;
    return fontSize_val;
}

function bold() {
    bold_val = !bold_val
    return bold_val
}

function italic() {
    italic_val = !italic_val
    return italic_val
}

function underline() {
    underline_val = !underline_val
    return underline_val
}

function strikethrough() {
    strikethrough_val = !strikethrough_val
    return strikethrough_val
}

function align_left() {
    alignLeft_val = !alignLeft_val
    return alignLeft_val
}

function align_right() {
    alignRight_val = !alignRight_val
    return alignRight_val
}

function align_center() {
    alignCenter_val = !alignCenter_val
    return alignCenter_val
}

function align_justify() {
    alignJustify_val = !alignJustify_val
    return alignJustify_val
}

function order_list() {
    orderList_val = !orderList_val
    return orderList_val
}

function unorder_list() {
    unorderList_val = !unorderList_val
    return unorderList_val
}