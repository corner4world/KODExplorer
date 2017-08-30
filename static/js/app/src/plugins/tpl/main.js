/*! power by kodcloud ver4.06(2017-08-30) [build 1504104835814] */
define("app/src/plugins/tpl/main.html",[],'<div class="header">\n	<button class="btn btn-default" type="button" action=\'historyBack\'>\n		<i class=" icon-chevron-left pr-10"></i>{{LNG.PluginBack}}\n	</button>\n	<div class="name">{{item.name}}</div>\n</div>\n<div class="left-content align-center data-app" data-app="{{item.id}}">\n	<div class="icon">\n		{{if item.source && item.source.icon}}\n			<img src="{{item.source.icon}}" draggable="false">\n		{{else if item.source && item.source.thumb}}\n			<img src="{{item.source.thumb}}" draggable="false" style="width:100%;height:100%" />\n		{{else if item.source && item.source.className}}\n			<div class="content"><i class="{{item.source.className}}"></i></div>\n		{{else}}\n			<div class="content">\n				<i class="font-icon words bg-blue-7 {{item.name |nameToClassName}}">{{item.name.substr(0,2)}}</i>\n			</div>\n		{{/if}}\n	</div>\n	<div class="app-title">{{item.title}}</div>\n	\n	<div class="action btn-group">\n	{{if item.status == 1}}\n		{{if item.server && kod.window.parseFloat(item.server.version) > kod.window.parseFloat(item.version)}}\n			<button class="btn btn-success" type="button" action=\'appInstall\'>\n				<span>{{LNG.PluginUpdateStart}}</span>\n			</button>\n		{{else if item.appOpen}}\n			<button class="btn btn-success" type="button" action=\'appOpen\'>\n				<span>{{LNG.PluginOpen}}</span>\n			</button>\n		{{else}}\n			<button class="btn btn-success" type="button" action=\'appConfig\'>\n				<i class="font-icon icon-gear"></i>\n				<span>{{LNG.PluginConfig}}</span>\n			</button>\n		{{/if}}\n\n		<button class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">\n			<span class="caret"></span><span class="sr-only"></span>\n		</button>\n		<ul class="dropdown-menu align-left" role="menu">\n			{{if item.server && kod.window.parseFloat(item.server.version) > kod.window.parseFloat(item.version)}}\n				<li><a action="appInstall" href="javascript:;"><i class="font-icon icon-gear"></i>{{LNG.PluginUpdateStart}}</a></li>\n				<li role="separator" class="divider"></li>\n			{{/if}}\n			<li><a action="appConfig" href="javascript:;"><i class="font-icon icon-gear"></i>{{LNG.PluginConfig}}</a></li>\n			<li><a action="appDisable" href="javascript:;"><i class="font-icon icon-ban-circle"></i>{{LNG.PluginDisable}}</a></li>\n			<li><a action="appRemove" href="javascript:;"><i class="font-icon icon-trash"></i>{{LNG.PluginRemove}}</a></li>\n		</ul>\n	{{else if item.status == 0}}\n		<button class="btn btn-warning" type="button" action=\'appEnable\'>\n			<i class="font-icon icon-ok"></i>{{LNG.PluginEnable}}\n		</button>\n		<button class="btn btn-warning dropdown-toggle" type="button" data-toggle="dropdown">\n			<span class="caret"></span><span class="sr-only"></span>\n		</button>\n		<ul class="dropdown-menu align-left" role="menu">\n			<li><a action="appEnable" href="javascript:;"><i class="font-icon icon-ok"></i>{{LNG.PluginEnable}}</a></li>	\n			<li><a action="appRemove" href="javascript:;"><i class="font-icon icon-trash"></i>{{LNG.PluginRemove}}</a></li>\n		</ul>\n	{{else}}\n		{{if item.price > \'A\' && kod.core.versionType == \'A\'}}\n			<button class="btn btn-warning" type="button" action=\'appInstall\'>\n				<i class="font-icon icon-angle-right"></i>\n				<span>{{LNG.PluginBuy}}</span>\n			</button>\n		{{else}}\n			<button class="btn btn-success" type="button" action=\'appInstall\'>\n				<i class="font-icon icon-download-alt"></i>\n				<span>{{LNG.PluginInstall}}</span>\n			</button>\n			<button class="btn btn-sm btn-success dropdown-toggle" type="button" data-toggle="dropdown">\n				<span class="caret"></span><span class="sr-only"></span>\n			</button>\n			<ul class="dropdown-menu" role="menu">\n				<li><a action="installSelf" href="javascript:;">\n					<i class="font-icon icon-download-alt"></i>{{LNG.PluginInstallSelf}}</a></li>\n			</ul>\n		{{/if}}\n	{{/if}}\n	</div>\n	\n	<div class=\'progress hidden\'>\n		<span class=\'total-size\'></span>\n		<span class=\'download-speed\'></span>\n		<div class=\'progress-bar\'></div>\n	</div>\n\n	<div class="align-left">\n		<div class="line"></div>\n		<div class="title">{{LNG.PluginStatus}}</div>\n		{{if item.status == 1}}\n			{{if item.server && kod.window.parseFloat(item.server.version) > kod.window.parseFloat(item.version)}}\n				<div class="p green-9">{{LNG.PluginHasUpdate}}(Ver {{item.server.version}})</div>\n			{{else}}\n				<div class="p green-6">{{LNG.PluginStatusEnabled}}</div>\n			{{/if}}		\n		{{else if item.status == 0}}\n			<div class="p yellow-6">{{LNG.PluginStatusDisabled}}</div>\n		{{else}}\n			<div class="p grey-6">{{LNG.PluginStatusNotInstall}}</div>\n		{{/if}}\n\n		{{if item.auther.copyright}}\n		<div class="title">{{LNG.PluginAuther}}</div>\n		<div class="p"> \n			{{if item.auther.homePage}}\n				<a href="{{item.auther.homePage}}" target="_blank">{{item.auther.copyright}}</a>\n			{{else}}\n				{{item.auther.copyright}}\n			{{/if}}\n		</div>\n		{{/if}}\n\n		<div class="title">{{LNG.PluginVersion}}</div>\n		<div class="p">{{item.version}}</div>\n\n		{{if item.server}}\n			<div class="title">{{LNG.size}}</div>\n			<div class="p">{{item.server.size |pathTools.fileSize}}</div>\n		{{/if}}\n	</div>\n</div>\n<div class="right-content">\n	{{if item.source && item.source.screenshoot}}\n	<div class="sliders">\n		<div id="plugin-slider" class="carousel slide" data-ride="carousel" data-interval="40000">\n		<ol class="carousel-indicators">\n			{{each item.source.screenshoot picture index}}\n			<li data-target="#plugin-slider" data-slide-to="{{index}}" class="{{if index == 0}}active{{/if}}"></li>\n			{{/each}}\n		</ol>\n		<div class="carousel-inner" role="listbox">\n			{{each item.source.screenshoot picture index}}\n			<div class="item {{if index == 0}}active{{/if}}">\n				<img src="{{picture}}" data-holder-rendered="true">\n			</div>\n			{{/each}}\n		</div>\n\n		{{if item.source.screenshoot.length > 1}}\n		<a class="left carousel-control" href="#plugin-slider" role="button" data-slide="prev">\n			<span class="glyphicon icon-angle-left glyphicon-chevron-left" aria-hidden="true"></span>\n			<span class="sr-only">Previous</span>\n		</a>\n		<a class="right carousel-control" href="#plugin-slider" role="button" data-slide="next">\n			<span class="glyphicon icon-angle-right glyphicon-chevron-right" aria-hidden="true"></span>\n			<span class="sr-only">Next</span>\n		</a>\n		{{/if}}\n		</div>\n	</div>\n	{{/if}}\n	<div class="description">\n		{{if item.description}}\n			<h4 class="title">{{LNG.PluginReadme}} :</h4>\n			<div class="text mb-30">{{@item.description}}</div>\n		{{/if}}\n\n		{{if item.configItem && item.configItem.fileExt}}\n			<h4 class="title">{{LNG[\'Plugin.Config.fileExt\']}} :</h4>\n			<div class="text mb-20">{{item.configItem.fileExt.value}}</div>\n		{{/if}}\n	</div>\n</div>\n');