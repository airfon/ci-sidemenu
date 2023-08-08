(function() {
    customElements.define('com-str-costinsights-sidebar', class SideBar extends HTMLElement {
        constructor() {											// 1. set initial HTML markup
            super();
            let root = document.createElement("div");
            root.setAttribute("style", "height:100%");
            root.innerHTML = `
				<style>	
		   			#navigation-menu {width:70px;height:100%;overflow:hidden;border-right:1px solid #c9c9c9;transition:width .3s cubic-bezier(0,0.55,0.45,1) .5s;background-color:#ffffff}
					#navigation-menu:hover {width:270px;transition:width .3s cubic-bezier(0,0.55,0.45,1)}
					.menu-item-container,.menu-item-container-selected {position:relative;height:60px;width:100%;margin-top:10px;cursor:default}
					.menu-item-container:first-child,.menu-item-container-selected:first-child {margin-top:60px}
     					.menu-item-container-selected {background-color:#ebf2f8}
					.menu-item-container:hover {background-color:#f5f9fc}
					.menu-item-icon {position:absolute;display:block;top:14px;left:19px;cursor:default;fill:#9e9e9e}
     					.menu-item-container-selected .menu-item-icon {fill:#0460A9}
					.menu-item-text {position:absolute;top:21px;left:70px;width:200px;cursor:default;font-family:"72", Arial;color:#212121;font-weight:700;font-size:16px}
				</style>
				<div id="navigation-menu"></div>`;
            this.appendChild(root);
        }
	    
        connectedCallback() {										// 2. then get external .json
            if (!document.getElementById("navigation-menu").children.length) {	
                //fetch("https://sac-dev-cw.novartis.net/cw/dev/ci-sidebar/ci-config.json")
		    fetch("https://raw.githubusercontent.com/airfon/ci-sidemenu/main/ci-config.json")
                    .then(response => response.json())
                    .then(data => initMenu(data));
                document.querySelector('div[class*="sap-custom-default-sdk_com_str_costinsights_sidebar"').querySelector('div[class~="sapCustomWidget"').setAttribute("style", "overflow:visible");
            }
        }
	    
        getID() {											// 5. return ID of triggered application back to SAC
            return ID;
        }
    });

    function setSelectedId() {										// 4. when clicked, trigger SAC event
        ID = this.getAttribute("uid");
        let eventClick = new Event("onClick");
        this.parentElement.parentElement.parentElement.dispatchEvent(eventClick);
    }

    function initMenu(menuItemsJSONs) {									// 3. populate menu with data from external file
        for (let i = 0; i < menuItemsJSONs.length; i++) {
            let link = window.location.href;
            let navigationMenu = document.getElementById("navigation-menu");
            let menuItemContainer = document.createElement("div");
            if (link.includes(menuItemsJSONs[i].uid)) {
                menuItemContainer.setAttribute("class", "menu-item-container-selected");
            } else {
                menuItemContainer.setAttribute("class", "menu-item-container");
            }
            menuItemContainer.setAttribute("uid", menuItemsJSONs[i].uid);
            menuItemContainer.innerHTML = atob(menuItemsJSONs[i].svg);
            let textSpan = document.createElement("span");
            textSpan.setAttribute("class", "menu-item-text");
            textSpan.innerHTML = menuItemsJSONs[i].text;
            menuItemContainer.appendChild(textSpan);
            menuItemContainer.addEventListener("click", setSelectedId);
            navigationMenu.appendChild(menuItemContainer);
        }
    }
})();
