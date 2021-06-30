function getNameIndex() {
  var shadow = document
    .getElementsByTagName("gds-uma-musume-friends")
    .item(0).shadowRoot;

  var name_list = shadow.querySelectorAll(
    ".-r-uma-musume-friends-search-modal__umamusume-select > option",
  );

  var index = Array.from(name_list)
    .map((name) => name.textContent.trim())
    .indexOf("%MAIN_UMA_NAME%");
  return index;
}
