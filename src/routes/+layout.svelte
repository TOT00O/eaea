<script>
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import { base } from '$app/paths';
</script>


<nav class>
	<div class="top">
		<h1>text for name</h1>
	</div>
	<div class = "links">
	<div class="links-waper">
		<a href="{base}/">Hem</a>

	<a href="{base}/photoapp">Photos</a>
	
	
	<a href="{base}/register"> Register</a>
	<a href="{base}/shopinglist"> Shoppinglist</a>
	<a href="{base}/memory"> Memory</a>
	<a href="{base}/chat"> Chat</a>
	<a href="{base}/search"> Search</a>
	<a href="{base}/ux-login"> login</a>
	<a href="{base}/guess"> guess</a>
	

	</div>
</div>
	
</nav>

<style>
	nav {
		width: 100vw;
 	height: 10vh;
margin: 0em;
		background: url(https://i.pinimg.com/originals/c2/cf/03/c2cf0362e1f8792fd527f83edbf3c5e7.gif) no-repeat no-repeat fixed;
	background-size: 100vw 10vh;
	background-color: rgb(0, 0, 0);
	
	}
	nav .top{
		padding-top: 20px;
		
	}
	h1{
		
		font-family: 'Courier New', monospace ;
		font-size: 44px;
		color:black;
		text-align: center;
	}
	.links{
		text-align: center;
		color: black;
	
	}
.links-waper :hover{text-decoration: underline;}
</style>
<slot />
