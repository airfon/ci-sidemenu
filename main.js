(function()  {
	customElements.define('com-str-costinsights-sidebar', class SideBar extends HTMLElement {
		constructor() {
			super();
			let root = document.createElement("div");
			root.setAttribute("style","height:100%");
			root.innerHTML = `
			<style>	
   			#navigation-menu {width: 70px;height: 100%;overflow: hidden;border-right: 1px solid #c9c9c9;transition: width .3s cubic-bezier(0,0.55,0.45,1) .5s;background-color: #ffffff;}
			#navigation-menu:hover {width: 270px;transition: width .3s cubic-bezier(0,0.55,0.45,1);}
			.menu-item-container {position: relative;height: 60px;width: 100%;margin-top: 10px;cursor: default;}
			.menu-item-container:first-child {margin-top: 60px;}
			.menu-item-container:hover {background-color: #f5f9fc;}
			.menu-item-icon {position: absolute;top: 14px;left: 19px;cursor: default;}
			.menu-item-text {position: absolute;top: 21px;left: 70px;width: 200px;cursor: default;font-family: "72", Arial;color: #212121;font-weight: 700;font-size: 16px;}
			.menu-item-icon {display: block;fill: #9e9e9e;}
			</style>
			<div id="navigation-menu">
			</div>`;
			this.appendChild(root);
			this.addEventListener("click", event => {
		        	let eventClick = new Event("onClick");
		       		this.dispatchEvent(eventClick);
			});
		}
		connectedCallback() {
			let menuItemsJSONs = [
				{uid:"5E903204EB52CD8856B9482101529D6F",text:"Spend Dashboard",svg:'<svg class="menu-item-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid" x="0px" y="0px"><path d="M26.8725 20.9697V6.42424H5.08403V20.9697H26.8725ZM26.8725 4C27.5146 4 28.1304 4.25541 28.5844 4.71004C29.0384 5.16468 29.2935 5.78129 29.2935 6.42424V20.9697C29.2935 21.6126 29.0384 22.2293 28.5844 22.6839C28.1304 23.1385 27.5146 23.3939 26.8725 23.3939H18.3992V25.8182H20.8202V28.2424H11.1364V25.8182H13.5573V23.3939H5.08403C3.74041 23.3939 2.66309 22.303 2.66309 20.9697V6.42424C2.66309 5.07879 3.74041 4 5.08403 4H26.8725ZM7.50497 8.84848H18.3992V14.9091H7.50497V8.84848ZM19.6097 8.84848H24.4516V11.2727H19.6097V8.84848ZM24.4516 12.4848V18.5455H19.6097V12.4848H24.4516ZM7.50497 16.1212H12.3469V18.5455H7.50497V16.1212ZM13.5573 16.1212H18.3992V18.5455H13.5573V16.1212Z"/></svg>'},
				{uid:"E7D00201F0144FEC513D76DABF76C75E",text:"Purchase Order",svg:'<svg class="menu-item-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid" x="0px" y="0px"><path d="M22.6358 24.0001C23.3421 24.0001 24.0195 24.281 24.5189 24.7811C25.0183 25.2812 25.2989 25.9595 25.2989 26.6667C25.2989 27.374 25.0183 28.0523 24.5189 28.5524C24.0195 29.0525 23.3421 29.3334 22.6358 29.3334C21.1579 29.3334 19.9728 28.1334 19.9728 26.6667C19.9728 25.1867 21.1579 24.0001 22.6358 24.0001ZM1.33154 2.66675H5.68561L6.93724 5.33341H26.6304C26.9835 5.33341 27.3222 5.47389 27.5719 5.72394C27.8216 5.97399 27.9619 6.31313 27.9619 6.66675C27.9619 6.89341 27.8953 7.12008 27.8021 7.33342L23.0353 15.9601C22.5826 16.7734 21.7038 17.3334 20.7051 17.3334H10.7853L9.58696 19.5067L9.54702 19.6667C9.54702 19.7552 9.58209 19.8399 9.64451 19.9025C9.70694 19.965 9.79161 20.0001 9.8799 20.0001H25.2989V22.6667H9.32066C7.84267 22.6667 6.65762 21.4667 6.65762 20.0001C6.65762 19.5334 6.77746 19.0934 6.97718 18.7201L8.78805 15.4534L3.99458 5.33341H1.33154V2.66675ZM9.32066 24.0001C10.0269 24.0001 10.7043 24.281 11.2037 24.7811C11.7031 25.2812 11.9837 25.9595 11.9837 26.6667C11.9837 27.374 11.7031 28.0523 11.2037 28.5524C10.7043 29.0525 10.0269 29.3334 9.32066 29.3334C7.84267 29.3334 6.65762 28.1334 6.65762 26.6667C6.65762 25.1867 7.84267 24.0001 9.32066 24.0001ZM21.3043 14.6667L25.006 8.00008H8.17555L11.3179 14.6667H21.3043Z"/></svg>'},
				{uid:"18D83707AACFF0852330BCEA6F69E05B",text:"Allocation Transparency",svg:'<svg class="menu-item-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid" x="0px" y="0px"><path d="M10.6667 13.3333V17.3333H18.6667V24H10.6667V28L2.66675 20.6667L10.6667 13.3333ZM29.3334 11.3333L21.3334 4V8H13.3334V14.6667H21.3334V18.6667L29.3334 11.3333Z"/></svg>'},
				{uid:"E3B0A5822A611C3E29BE2686AE68F8A9",text:"FTE",svg:'<svg class="menu-item-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid" x="0px" y="0px"><path d="M21.3334 22.6667V25.3333H2.66675V22.6667C2.66675 22.6667 2.66675 17.3333 12.0001 17.3333C21.3334 17.3333 21.3334 22.6667 21.3334 22.6667ZM16.6667 9.99999C16.6667 9.07701 16.3931 8.17476 15.8803 7.40733C15.3675 6.6399 14.6387 6.04176 13.7859 5.68855C12.9332 5.33534 11.9949 5.24293 11.0897 5.42299C10.1844 5.60306 9.3529 6.04751 8.70025 6.70016C8.04761 7.3528 7.60315 8.18432 7.42308 9.08957C7.24302 9.99481 7.33543 10.9331 7.68864 11.7858C8.04185 12.6386 8.63999 13.3674 9.40742 13.8802C10.1748 14.393 11.0771 14.6667 12.0001 14.6667C13.2378 14.6667 14.4247 14.175 15.2999 13.2998C16.1751 12.4246 16.6667 11.2377 16.6667 9.99999ZM21.2534 17.3333C22.0731 17.9677 22.7438 18.7739 23.2183 19.6953C23.6929 20.6168 23.9597 21.631 24.0001 22.6667V25.3333H29.3334V22.6667C29.3334 22.6667 29.3334 17.8267 21.2534 17.3333ZM20.0001 5.33332C19.0823 5.32821 18.1848 5.6026 17.4267 6.11999C18.2367 7.25164 18.6722 8.60837 18.6722 9.99999C18.6722 11.3916 18.2367 12.7483 17.4267 13.88C18.1848 14.3974 19.0823 14.6718 20.0001 14.6667C21.2378 14.6667 22.4247 14.175 23.2999 13.2998C24.1751 12.4246 24.6667 11.2377 24.6667 9.99999C24.6667 8.76231 24.1751 7.57533 23.2999 6.70016C22.4247 5.82499 21.2378 5.33332 20.0001 5.33332Z"/>'}
			];
			let navigationMenu = document.getElementById("navigation-menu");
			for(let i=0;i<menuItemsJSONs.length;i++) {
				let menuItemContainer = document.createElement("div");
				menuItemContainer.setAttribute("class","menu-item-container");
				menuItemContainer.setAttribute("uid",menuItemsJSONs[i].uid);
				menuItemContainer.innerHTML = menuItemsJSONs[i].svg;
				let textSpan = document.createElement("span");
				textSpan.setAttribute("class","menu-item-text");
				textSpan.innerHTML = menuItemsJSONs[i].text;
				menuItemContainer.appendChild(textSpan);
				menuItemContainer.addEventListener("click", setSelectedId);
				navigationMenu.appendChild(menuItemContainer);
			}
			document.querySelector('div[class*="sap-custom-default-sdk_com_str_costinsights_sidebar__1"').querySelector('div[class~="sapCustomWidget"').setAttribute("style","overflow: visible");
		}
		getID() {
			return ID;
		}
	});
	function setSelectedId() {
		ID = this.getAttribute("uid");
	}
})();
