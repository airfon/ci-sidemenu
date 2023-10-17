(function() {
    customElements.define('com-str-costinsights-sidebartest', class SideBar extends HTMLElement {
        constructor() {											// 1. set initial HTML markup
            super();
            let root = document.createElement("div");
            root.setAttribute("style", "height:100%");
            root.innerHTML = `
				<style>	
		   			#navigation-menu {width:70px;height:100%;overflow:hidden;border-right:1px solid #c9c9c9;transition:width .3s cubic-bezier(0,0.55,0.45,1) .5s;background-color:#0460A9}
					#navigation-menu:hover {width:270px;transition:width .3s cubic-bezier(0,0.55,0.45,1)}
					.menu-item-container,.menu-item-container-selected {position:relative;height:60px;width:100%;margin-top:10px;cursor:default}
					.menu-item-container:first-child,.menu-item-container-selected:first-child {margin-top:60px}
     					.menu-item-container-selected {background-color:#2877B6}
					.menu-item-container:hover {background-color:#2877B6}
					.menu-item-icon {position:absolute;display:block;top:14px;left:19px;cursor:default;fill:#ffffff}
     					.menu-item-container-selected .menu-item-icon {fill:#ffffff}
					.menu-item-text {position:absolute;top:21px;left:70px;width:200px;cursor:default;font-family:"72", Arial;color:#ffffff;font-weight:700;font-size:16px}
				</style>
				<div id="navigation-menu"></div>`;
            this.appendChild(root);
        }
	    
        connectedCallback() {										// 2. then get data as json
            if (!document.getElementById("navigation-menu").children.length) {	
                var data = [{
					"uid": "5E903204EB52CD8856B9482101529D6F",
					"text": "Spend Dashboard",
					"svg": "PHN2ZyBjbGFzcz0ibWVudS1pdGVtLWljb24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiB4PSIwcHgiIHk9IjBweCI+PHBhdGggZD0iTTI2Ljg3MjUgMjAuOTY5N1Y2LjQyNDI0SDUuMDg0MDNWMjAuOTY5N0gyNi44NzI1Wk0yNi44NzI1IDRDMjcuNTE0NiA0IDI4LjEzMDQgNC4yNTU0MSAyOC41ODQ0IDQuNzEwMDRDMjkuMDM4NCA1LjE2NDY4IDI5LjI5MzUgNS43ODEyOSAyOS4yOTM1IDYuNDI0MjRWMjAuOTY5N0MyOS4yOTM1IDIxLjYxMjYgMjkuMDM4NCAyMi4yMjkzIDI4LjU4NDQgMjIuNjgzOUMyOC4xMzA0IDIzLjEzODUgMjcuNTE0NiAyMy4zOTM5IDI2Ljg3MjUgMjMuMzkzOUgxOC4zOTkyVjI1LjgxODJIMjAuODIwMlYyOC4yNDI0SDExLjEzNjRWMjUuODE4MkgxMy41NTczVjIzLjM5MzlINS4wODQwM0MzLjc0MDQxIDIzLjM5MzkgMi42NjMwOSAyMi4zMDMgMi42NjMwOSAyMC45Njk3VjYuNDI0MjRDMi42NjMwOSA1LjA3ODc5IDMuNzQwNDEgNCA1LjA4NDAzIDRIMjYuODcyNVpNNy41MDQ5NyA4Ljg0ODQ4SDE4LjM5OTJWMTQuOTA5MUg3LjUwNDk3VjguODQ4NDhaTTE5LjYwOTcgOC44NDg0OEgyNC40NTE2VjExLjI3MjdIMTkuNjA5N1Y4Ljg0ODQ4Wk0yNC40NTE2IDEyLjQ4NDhWMTguNTQ1NUgxOS42MDk3VjEyLjQ4NDhIMjQuNDUxNlpNNy41MDQ5NyAxNi4xMjEySDEyLjM0NjlWMTguNTQ1NUg3LjUwNDk3VjE2LjEyMTJaTTEzLjU1NzMgMTYuMTIxMkgxOC4zOTkyVjE4LjU0NTVIMTMuNTU3M1YxNi4xMjEyWiIvPjwvc3ZnPg=="
				}, {
					"uid": "E7D00201F0144FEC513D76DABF76C75E",
					"text": "Purchase Order",
					"svg": "PHN2ZyBjbGFzcz0ibWVudS1pdGVtLWljb24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiB4PSIwcHgiIHk9IjBweCI+PHBhdGggZD0iTTIyLjYzNTggMjQuMDAwMUMyMy4zNDIxIDI0LjAwMDEgMjQuMDE5NSAyNC4yODEgMjQuNTE4OSAyNC43ODExQzI1LjAxODMgMjUuMjgxMiAyNS4yOTg5IDI1Ljk1OTUgMjUuMjk4OSAyNi42NjY3QzI1LjI5ODkgMjcuMzc0IDI1LjAxODMgMjguMDUyMyAyNC41MTg5IDI4LjU1MjRDMjQuMDE5NSAyOS4wNTI1IDIzLjM0MjEgMjkuMzMzNCAyMi42MzU4IDI5LjMzMzRDMjEuMTU3OSAyOS4zMzM0IDE5Ljk3MjggMjguMTMzNCAxOS45NzI4IDI2LjY2NjdDMTkuOTcyOCAyNS4xODY3IDIxLjE1NzkgMjQuMDAwMSAyMi42MzU4IDI0LjAwMDFaTTEuMzMxNTQgMi42NjY3NUg1LjY4NTYxTDYuOTM3MjQgNS4zMzM0MUgyNi42MzA0QzI2Ljk4MzUgNS4zMzM0MSAyNy4zMjIyIDUuNDczODkgMjcuNTcxOSA1LjcyMzk0QzI3LjgyMTYgNS45NzM5OSAyNy45NjE5IDYuMzEzMTMgMjcuOTYxOSA2LjY2Njc1QzI3Ljk2MTkgNi44OTM0MSAyNy44OTUzIDcuMTIwMDggMjcuODAyMSA3LjMzMzQyTDIzLjAzNTMgMTUuOTYwMUMyMi41ODI2IDE2Ljc3MzQgMjEuNzAzOCAxNy4zMzM0IDIwLjcwNTEgMTcuMzMzNEgxMC43ODUzTDkuNTg2OTYgMTkuNTA2N0w5LjU0NzAyIDE5LjY2NjdDOS41NDcwMiAxOS43NTUyIDkuNTgyMDkgMTkuODM5OSA5LjY0NDUxIDE5LjkwMjVDOS43MDY5NCAxOS45NjUgOS43OTE2MSAyMC4wMDAxIDkuODc5OSAyMC4wMDAxSDI1LjI5ODlWMjIuNjY2N0g5LjMyMDY2QzcuODQyNjcgMjIuNjY2NyA2LjY1NzYyIDIxLjQ2NjcgNi42NTc2MiAyMC4wMDAxQzYuNjU3NjIgMTkuNTMzNCA2Ljc3NzQ2IDE5LjA5MzQgNi45NzcxOCAxOC43MjAxTDguNzg4MDUgMTUuNDUzNEwzLjk5NDU4IDUuMzMzNDFIMS4zMzE1NFYyLjY2Njc1Wk05LjMyMDY2IDI0LjAwMDFDMTAuMDI2OSAyNC4wMDAxIDEwLjcwNDMgMjQuMjgxIDExLjIwMzcgMjQuNzgxMUMxMS43MDMxIDI1LjI4MTIgMTEuOTgzNyAyNS45NTk1IDExLjk4MzcgMjYuNjY2N0MxMS45ODM3IDI3LjM3NCAxMS43MDMxIDI4LjA1MjMgMTEuMjAzNyAyOC41NTI0QzEwLjcwNDMgMjkuMDUyNSAxMC4wMjY5IDI5LjMzMzQgOS4zMjA2NiAyOS4zMzM0QzcuODQyNjcgMjkuMzMzNCA2LjY1NzYyIDI4LjEzMzQgNi42NTc2MiAyNi42NjY3QzYuNjU3NjIgMjUuMTg2NyA3Ljg0MjY3IDI0LjAwMDEgOS4zMjA2NiAyNC4wMDAxWk0yMS4zMDQzIDE0LjY2NjdMMjUuMDA2IDguMDAwMDhIOC4xNzU1NUwxMS4zMTc5IDE0LjY2NjdIMjEuMzA0M1oiLz48L3N2Zz4="
				}, {
					"uid": "18D83707AACFF0852330BCEA6F69E05B",
					"text": "Allocation Transparency",
					"svg": "PHN2ZyBjbGFzcz0ibWVudS1pdGVtLWljb24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiB4PSIwcHgiIHk9IjBweCI+PHBhdGggZD0iTTEwLjY2NjcgMTMuMzMzM1YxNy4zMzMzSDE4LjY2NjdWMjRIMTAuNjY2N1YyOEwyLjY2Njc1IDIwLjY2NjdMMTAuNjY2NyAxMy4zMzMzWk0yOS4zMzM0IDExLjMzMzNMMjEuMzMzNCA0VjhIMTMuMzMzNFYxNC42NjY3SDIxLjMzMzRWMTguNjY2N0wyOS4zMzM0IDExLjMzMzNaIi8+PC9zdmc+"
				}, {
					"uid": "E3B0A5822A611C3E29BE2686AE68F8A9",
					"text": "FTE",
					"svg": "PHN2ZyBjbGFzcz0ibWVudS1pdGVtLWljb24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiB4PSIwcHgiIHk9IjBweCI+PHBhdGggZD0iTTIxLjMzMzQgMjIuNjY2N1YyNS4zMzMzSDIuNjY2NzVWMjIuNjY2N0MyLjY2Njc1IDIyLjY2NjcgMi42NjY3NSAxNy4zMzMzIDEyLjAwMDEgMTcuMzMzM0MyMS4zMzM0IDE3LjMzMzMgMjEuMzMzNCAyMi42NjY3IDIxLjMzMzQgMjIuNjY2N1pNMTYuNjY2NyA5Ljk5OTk5QzE2LjY2NjcgOS4wNzcwMSAxNi4zOTMxIDguMTc0NzYgMTUuODgwMyA3LjQwNzMzQzE1LjM2NzUgNi42Mzk5IDE0LjYzODcgNi4wNDE3NiAxMy43ODU5IDUuNjg4NTVDMTIuOTMzMiA1LjMzNTM0IDExLjk5NDkgNS4yNDI5MyAxMS4wODk3IDUuNDIyOTlDMTAuMTg0NCA1LjYwMzA2IDkuMzUyOSA2LjA0NzUxIDguNzAwMjUgNi43MDAxNkM4LjA0NzYxIDcuMzUyOCA3LjYwMzE1IDguMTg0MzIgNy40MjMwOCA5LjA4OTU3QzcuMjQzMDIgOS45OTQ4MSA3LjMzNTQzIDEwLjkzMzEgNy42ODg2NCAxMS43ODU4QzguMDQxODUgMTIuNjM4NiA4LjYzOTk5IDEzLjM2NzQgOS40MDc0MiAxMy44ODAyQzEwLjE3NDggMTQuMzkzIDExLjA3NzEgMTQuNjY2NyAxMi4wMDAxIDE0LjY2NjdDMTMuMjM3OCAxNC42NjY3IDE0LjQyNDcgMTQuMTc1IDE1LjI5OTkgMTMuMjk5OEMxNi4xNzUxIDEyLjQyNDYgMTYuNjY2NyAxMS4yMzc3IDE2LjY2NjcgOS45OTk5OVpNMjEuMjUzNCAxNy4zMzMzQzIyLjA3MzEgMTcuOTY3NyAyMi43NDM4IDE4Ljc3MzkgMjMuMjE4MyAxOS42OTUzQzIzLjY5MjkgMjAuNjE2OCAyMy45NTk3IDIxLjYzMSAyNC4wMDAxIDIyLjY2NjdWMjUuMzMzM0gyOS4zMzM0VjIyLjY2NjdDMjkuMzMzNCAyMi42NjY3IDI5LjMzMzQgMTcuODI2NyAyMS4yNTM0IDE3LjMzMzNaTTIwLjAwMDEgNS4zMzMzMkMxOS4wODIzIDUuMzI4MjEgMTguMTg0OCA1LjYwMjYgMTcuNDI2NyA2LjExOTk5QzE4LjIzNjcgNy4yNTE2NCAxOC42NzIyIDguNjA4MzcgMTguNjcyMiA5Ljk5OTk5QzE4LjY3MjIgMTEuMzkxNiAxOC4yMzY3IDEyLjc0ODMgMTcuNDI2NyAxMy44OEMxOC4xODQ4IDE0LjM5NzQgMTkuMDgyMyAxNC42NzE4IDIwLjAwMDEgMTQuNjY2N0MyMS4yMzc4IDE0LjY2NjcgMjIuNDI0NyAxNC4xNzUgMjMuMjk5OSAxMy4yOTk4QzI0LjE3NTEgMTIuNDI0NiAyNC42NjY3IDExLjIzNzcgMjQuNjY2NyA5Ljk5OTk5QzI0LjY2NjcgOC43NjIzMSAyNC4xNzUxIDcuNTc1MzMgMjMuMjk5OSA2LjcwMDE2QzIyLjQyNDcgNS44MjQ5OSAyMS4yMzc4IDUuMzMzMzIgMjAuMDAwMSA1LjMzMzMyWiIvPg=="
				}, {
					"uid": "ACC015050131F0E79A71FC048F49625F",
					"text": "M&S Transparency",
					"svg": "PHN2ZyBjbGFzcz0ibWVudS1pdGVtLWljb24iIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMTAgMTAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xNi4xMjgzIDI5LjA1MjZMMTIuMzM4OSAzMi43NjYzVjIyLjEwNTNIMTYuMTI4M00yMi40NDQxIDI2LjcyODRMMjAuNDYxIDI1LjAzNThMMTguNjU0NyAyNi43MDMyVjE3LjA1MjZIMjIuNDQ0MU0yOC43NTk5IDI0LjYzMTZMMjQuOTcwNCAyOC40MjExVjEySDI4Ljc1OTlNMzIuMzA5NCAyNC4zOTE2TDMwLjAyMzEgMjIuMTA1M0gzNi4zMzg5VjI4LjQyMTFMMzQuMDc3OCAyNi4xNkwyNC45NzA0IDM1LjE5MTZMMjAuNTg3MyAzMS4zNzY4TDE1LjgxMjYgMzZIMTIuMzM4OUwyMC41MTE1IDI3Ljk5MTZMMjQuOTcwNCAzMS43NTU4Ii8+Cjwvc3ZnPg=="
				}];
				initMenu(data);
                document.querySelector('div[class*="sap-custom-default-sdk_com_str_costinsights_sidebar"').querySelector('div[class~="sapCustomWidget"').setAttribute("style", "overflow:visible");
            }
        }
	    
        getID() {											// 5. return ID of triggered application back to SAC
            return ID;
        }
    });

    function initMenu(menuItemsJSONs) {									// 3. populate menu with data
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

    function setSelectedId() {										// 4. when clicked, trigger SAC event
        ID = this.getAttribute("uid");
        let eventClick = new Event("onClick");
        this.parentElement.parentElement.parentElement.dispatchEvent(eventClick);
    }
})();
