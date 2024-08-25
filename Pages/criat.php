<!DOCTYPE html>
<html lang="en">
<head>
	<script type="text/javascript">
		var text = 1;
	</script>
	<?php include '../html/link.html'; ?>
	<title>
		Creations | Bryan Christy
	</title>
	<script type="text/javascript" src="/new/JS/addjs.js"></script>
</head>
<body>
	<?php include '../html/head.html'; ?>
	<div class="image">
		<img src="/new/Utilities/neon.jpg" draggable="false" id="forest" oncontextmenu="return false" style="transform: scaleX(-1);">
	</div>
	<div id="bryan">
		<div id="li1" class="inline" value="creative"></div>
		<br>
		<div id="li2" class="inline" value="work"></div>
	</div>
	<div id="arrow">
		<a href="#down"><i class="bi bi-chevron-bar-down color" style="font-size: 5vh; font-weight: 100px;"></i></a>
	</div>
	<div  id="down" class="card">
		<div class="card-header">
			<div class="jumbotron text-center" style="text-transform: uppercase;">
				<p class="display-3" style="font-size: 4rem!important">
					<h1><div id="li3" class="inline display-3" value="productions"></div></h1>
				</p>
			</div>
		</div>
	</div>
	<div class="jumbotron text-center" id="web">
		<div id="li4" class="display-5" value="website"></div>
	</div>
	<div class="row" style="width: 99%">
		<div class="col-sm-8 inline">
			<img src="../Utilities/Screenshot (34).png" class="website inline" scrolling="no" style="height: 30rem; box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.3)">
		</div>
		<div class="col-sm-5 inline">
			<div class="text-center display-6" style="margin-top: 8rem">
				<h2><div id="li5" class="inline display-3 thin" value="kcp"></div></h2>
			</div>
			<div id="li6" class="inline" value="des-kcp"></div>
		</div>
	</div><br><br>
	<div class="jumbotron text-center">
		<div id="li7" class="display-5" value="pictures"></div>
	</div>
	<div class="carousel container row">
		<div class="col-md-auto">
			<img src="https://cdnb.artstation.com/p/assets/images/images/038/040/155/large/bryan-christy-final2a.jpg?1622011334" onclick="show(this)" class="image-small" alt="Little Robot in Jungle - Digital Art" draggable="false">
			
			<img src="https://cdna.artstation.com/p/assets/images/images/038/301/056/large/bryan-christy-final1.jpg?1622715097" onclick="show(this)" class="image-small" alt="Gigantic Robot in Space - Digital Art" draggable="false">
			
			<img src="https://cdnb.artstation.com/p/assets/images/images/037/990/613/large/bryan-christy-final2a.jpg?1621878246" onclick="show(this)" class="image-small" alt="Random Door Short at Night - Digital Art" draggable="false">
			
			<img src="https://cdna.artstation.com/p/assets/images/images/037/990/062/large/bryan-christy-final7b.jpg?1621877122" onclick="show(this)" class="image-small" alt="Female Game Character - Digital Art" draggable="false">
			
			<img src="https://cdna.artstation.com/p/assets/images/images/037/951/846/large/bryan-final1a-min.jpg?1621776346" onclick="show(this)" class="image-small" alt="Alien Coronavirus Invasion - Digital Art" draggable="false">
			
			<img src="https://cdna.artstation.com/p/assets/images/images/037/951/736/large/bryan-final6a-min.jpg?1621776092" onclick="show(this)" class="image-small" alt="Dragon - Digital Art" draggable="false">
			
			<img src="https://cdna.artstation.com/p/assets/images/images/037/949/748/large/bryan-final3b-min.jpg?1621770412" onclick="show(this)" class="image-small" alt="Scary and Evil Dog - Digital Art" draggable="false">

			<img src="https://cdna.artstation.com/p/assets/images/images/037/949/530/large/bryan-final2-min.jpg?1621770128" onclick="show(this)" class="image-small" alt="Small Flower Galaxy - Digital Art" draggable="false">

			<img src="https://image.shutterstock.com/shutterstock/photos/1963967920/display_1500/stock-photo-abandoned-street-with-majestic-sword-with-its-extraordinary-gems-d-artwork-d-rendered-1963967920.jpg" onclick="show(this)" class="image-small" alt="Apocalyptic City - Digital Art" draggable="false">
		</div>
	</div><br><br>
	<div class="jumbotron text-center">
		<div id="li8" class="display-5" value="pictures"></div>
	</div><br>
	<div class="text-center">
		<iframe class="video" src="https://www.youtube.com/embed/irGJh-Qzqng" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>
	<div class="modal" id="hide">
		<i class="bi bi-x-lg cancel" onclick="hide()"></i>
		<div id="h" class="text-center limit"></div>
		<div id="c" class="caption thin"></div>
		<div class="blockquote-footer" style="float: right; right: 2%; position: relative;">
			Digital Artist, Author 
			<cite title="Digital Artist" class="under" style="cursor: default;">
				Bryan Christy
			</cite>
		</div>
	</div><br><br>
	<?php include '../html/cookie.html'; ?>
	<?php include '../html/foot.html'; ?>
</body>
</html>