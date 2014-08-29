Ext.data.JsonP.EventTarget({"tagname":"class","name":"EventTarget","autodetected":{},"files":[{"filename":"EventTarget.js","href":"EventTarget.html#EventTarget"}],"members":[{"name":"constructor","tagname":"method","owner":"EventTarget","id":"method-constructor","meta":{}},{"name":"addDOMEvent","tagname":"method","owner":"EventTarget","id":"method-addDOMEvent","meta":{"protected":true}},{"name":"addFiredDOMEvent","tagname":"method","owner":"EventTarget","id":"method-addFiredDOMEvent","meta":{"protected":true}},{"name":"fire","tagname":"method","owner":"EventTarget","id":"method-fire","meta":{}},{"name":"off","tagname":"method","owner":"EventTarget","id":"method-off","meta":{"chainable":true}},{"name":"on","tagname":"method","owner":"EventTarget","id":"method-on","meta":{"chainable":true}},{"name":"once","tagname":"method","owner":"EventTarget","id":"method-once","meta":{"chainable":true}},{"name":"removeDOMEvent","tagname":"method","owner":"EventTarget","id":"method-removeDOMEvent","meta":{"protected":true}}],"alternateClassNames":[],"aliases":{},"id":"class-EventTarget","classIcon":"icon-class","superclasses":[],"subclasses":["Widget"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Widget' rel='Widget' class='docClass'>Widget</a></div><h4>Files</h4><div class='dependency'><a href='source/EventTarget.html#EventTarget' target='_blank'>EventTarget.js</a></div></pre><div class='doc-contents'><p>接收事件的对象</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventTarget'>EventTarget</span><br/><a href='source/EventTarget.html#EventTarget-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/EventTarget-method-constructor' class='name expandable'>EventTarget</a>( <span class='pre'></span> ) : <a href=\"#!/api/EventTarget\" rel=\"EventTarget\" class=\"docClass\">EventTarget</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/EventTarget\" rel=\"EventTarget\" class=\"docClass\">EventTarget</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addDOMEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventTarget'>EventTarget</span><br/><a href='source/EventTarget.html#EventTarget-method-addDOMEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventTarget-method-addDOMEvent' class='name expandable'>addDOMEvent</a>( <span class='pre'>element, type, handler</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>添加DOM事件 ...</div><div class='long'><p>添加DOM事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : HTMLElement<div class='sub-desc'><p>DOM元素</p>\n</div></li><li><span class='pre'>type</span> : String<div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>handler</span> : Function<div class='sub-desc'><p>事件处理函数</p>\n</div></li></ul></div></div></div><div id='method-addFiredDOMEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventTarget'>EventTarget</span><br/><a href='source/EventTarget.html#EventTarget-method-addFiredDOMEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventTarget-method-addFiredDOMEvent' class='name expandable'>addFiredDOMEvent</a>( <span class='pre'>element, type</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>添加DOM事件（触发同类型自定义事件） ...</div><div class='long'><p>添加DOM事件（触发同类型自定义事件）</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : HTMLElement<div class='sub-desc'><p>DOM元素</p>\n</div></li><li><span class='pre'>type</span> : String<div class='sub-desc'><p>事件类型</p>\n</div></li></ul></div></div></div><div id='method-fire' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventTarget'>EventTarget</span><br/><a href='source/EventTarget.html#EventTarget-method-fire' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventTarget-method-fire' class='name expandable'>fire</a>( <span class='pre'>type, [args]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>触发自定义事件 ...</div><div class='long'><p>触发自定义事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>args</span> : <a href=\"#!/api/Event\" rel=\"Event\" class=\"docClass\">Event</a>|Object (optional)<div class='sub-desc'><p>事件对象或事件参数</p>\n</div></li></ul></div></div></div><div id='method-off' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventTarget'>EventTarget</span><br/><a href='source/EventTarget.html#EventTarget-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventTarget-method-off' class='name expandable'>off</a>( <span class='pre'>[type], [handler]</span> ) : <a href=\"#!/api/EventTarget\" rel=\"EventTarget\" class=\"docClass\">EventTarget</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>移除自定义事件 ...</div><div class='long'><p>移除自定义事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String (optional)<div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>handler</span> : Function (optional)<div class='sub-desc'><p>事件处理函数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/EventTarget\" rel=\"EventTarget\" class=\"docClass\">EventTarget</a></span><div class='sub-desc'><p>控件实例</p>\n</div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventTarget'>EventTarget</span><br/><a href='source/EventTarget.html#EventTarget-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventTarget-method-on' class='name expandable'>on</a>( <span class='pre'>type, handler, [once]</span> ) : <a href=\"#!/api/EventTarget\" rel=\"EventTarget\" class=\"docClass\">EventTarget</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>添加自定义事件 ...</div><div class='long'><p>添加自定义事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>handler</span> : Function<div class='sub-desc'><p>事件处理函数</p>\n</div></li><li><span class='pre'>once</span> : Boolean (optional)<div class='sub-desc'><p>仅执行一次</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/EventTarget\" rel=\"EventTarget\" class=\"docClass\">EventTarget</a></span><div class='sub-desc'><p>控件实例</p>\n</div></li></ul></div></div></div><div id='method-once' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventTarget'>EventTarget</span><br/><a href='source/EventTarget.html#EventTarget-method-once' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventTarget-method-once' class='name expandable'>once</a>( <span class='pre'>type, handler</span> ) : <a href=\"#!/api/EventTarget\" rel=\"EventTarget\" class=\"docClass\">EventTarget</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>添加仅执行一次的自定义事件 ...</div><div class='long'><p>添加仅执行一次的自定义事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>handler</span> : Function<div class='sub-desc'><p>事件处理函数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/EventTarget\" rel=\"EventTarget\" class=\"docClass\">EventTarget</a></span><div class='sub-desc'><p>控件实例</p>\n</div></li></ul></div></div></div><div id='method-removeDOMEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventTarget'>EventTarget</span><br/><a href='source/EventTarget.html#EventTarget-method-removeDOMEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventTarget-method-removeDOMEvent' class='name expandable'>removeDOMEvent</a>( <span class='pre'>element, [type], [handler]</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>移除DOM事件 ...</div><div class='long'><p>移除DOM事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : HTMLElement<div class='sub-desc'><p>DOM元素</p>\n</div></li><li><span class='pre'>type</span> : String (optional)<div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>handler</span> : Function (optional)<div class='sub-desc'><p>事件处理函数</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});