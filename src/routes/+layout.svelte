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
</script>


<nav class>
	<div class="top">
		<h1>text for name</h1>
	</div>
	<div class = "links">
	<div class="links-waper">
		<a href="/">Hem</a>

	<a href="/photoapp">Moew</a>
	
	
	<a href="/register"> reg</a>
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
	background-color: rgb(255, 148, 202);
	
	}
	nav .top{
		padding-top: 10px;
		
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
