<?php
//version 4
$xmlDoc = simplexml_load_file('../../private/PhotoAlbumProData/albums.xml', 'SimpleXMLElement', LIBXML_NOCDATA);
$arrayAlbumsPro = array();
$i=0;
foreach ( $xmlDoc->album as $item )
{
	$arrayTemp = array();
	$arrayImages = array();
	$indexOfFirstImage = 0;
	if ( !empty($item->lastPublished) && ( 4 == $item->version ) && !empty($item->imagesOrder) )
	{
		$arrayTemp['id'] = (array)$item->albumId;
		$arrayTemp['title'] = (array)$item->title;
		$arrayTemp['description'] = (array)$item->description;
		$arrayTemp['directory'] = (array)$item->directory;
		$arrayTemp['image'] = (array)$item->imagesOrder;
		$arrayTemp['firstImageSrc']	= (array)$item->firstImageIndex;
		$arrayAlbumsPro[$i]['id'] = $arrayTemp['id'][0];
		$arrayAlbumsPro[$i]['title'] = str_replace("\n", " ", $arrayTemp['title'][0]);
		$arrayAlbumsPro[$i]['description'] = str_replace("\n", " ", $arrayTemp['description'][0]);
		$arrayAlbumsPro[$i]['description'] = preg_replace('| +|', ' ', $arrayAlbumsPro[$i]['description']);
		$arrayAlbumsPro[$i]['directory'] = $arrayTemp['directory'][0];
		if (empty($arrayTemp['firstImageSrc']))
		{	
			$arrayAlbumsPro[$i]['image'] = $arrayTemp['image'][0];
			$arrayImages = explode(',', $arrayAlbumsPro[$i]['image']);
			$arrayAlbumsPro[$i]['image'] = $arrayImages[$indexOfFirstImage].'?cache=0.'.time();
		}
		else
		{
			$directoryToReplace = str_replace('/', '\/', $arrayTemp['directory'][0]);
			$arrayAlbumsPro[$i]['image'] = preg_replace('/^.+'.$directoryToReplace.'\/(small.)?/', '', $arrayTemp['firstImageSrc'][0]).'?cache=0.'.time();
		}
		$i++;
	}
}

//version 3
$arrayAlbumsAdvanced = array();
$i=0;
foreach ( $xmlDoc->album as $item )
{
	$arrayTemp = array();
	$arrayImages = array();
	$indexOfFirstImage = 0;
	if ( !empty($item->lastPublished) && (3 == $item->version) && !empty($item->gallery) )
	{
		$arrayTemp['id'] = (array)$item->albumId;
		$arrayTemp['title'] = (array)$item->title;
		$arrayTemp['description'] = (array)$item->description;
		$arrayTemp['directory'] = (array)$item->directory;
		$arrayTemp['gallery'] = (array)$item->gallery;
		$arrayTemp['firstImageSrc']	= (array)$item->firstImageIndex;
		$arrayAlbumsAdvanced[$i]['id'] = $arrayTemp['id'][0];
		$arrayAlbumsAdvanced[$i]['title'] = str_replace("\n", " ", $arrayTemp['title'][0]);
		$arrayAlbumsAdvanced[$i]['description'] = str_replace("\n", " ", $arrayTemp['description'][0]);
		$arrayAlbumsAdvanced[$i]['description'] = preg_replace('| +|', ' ', $arrayAlbumsAdvanced[$i]['description']);
		$arrayAlbumsAdvanced[$i]['directory'] = $arrayTemp['directory'][0];
 		preg_match('/href[^ ]*'.str_replace('/', '\/', $arrayTemp['directory'][0]).'\/([^ ]*)"/', $arrayTemp['gallery'][0], $foundImages);
		$arrayAlbumsAdvanced[$i]['image'] = $foundImages[1];

		$i++;
	}
}

//version 2
$xmlDocOld = simplexml_load_file('../../private/PhotoAlbumData/albums.xml', 'SimpleXMLElement', LIBXML_NOCDATA);
$xmlDocIndex = file_get_contents('../../public/PhotoAlbums/index.html');
$arrayAlbumsClassic = array();
$i=0;
foreach ( $xmlDocOld->album as $item )
{
	$arrayTemp = array();
	$arrayImages = array();
	if ( !empty($item->lastPublished) )// && !empty($item->imagesOrder) )
	{
		$arrayTemp['id'] = (array)$item->albumId;
		$arrayTemp['title'] = (array)$item->title;
		$arrayTemp['description'] = (array)$item->description;
		$arrayTemp['directory'] = (array)$item->directory;
		
		$arrayAlbumsClassic[$i]['id'] = $arrayTemp['id'][0];
		
		$arrayAlbumsClassic[$i]['title'] = str_replace("\n", " ", $arrayTemp['title'][0]);
		$arrayAlbumsClassic[$i]['description'] = str_replace("\n", " ", $arrayTemp['description'][0]);
		$arrayAlbumsClassic[$i]['description'] = preg_replace('| +|', ' ', $arrayAlbumsClassic[$i]['description']);
		$arrayAlbumsClassic[$i]['directory'] = $arrayTemp['directory'][0];
		preg_match('/<img src.*'.str_replace('/', '\/', $arrayTemp['directory'][0]).'\/(.*)" class/', $xmlDocIndex, $foundImages);
		$arrayAlbumsClassic[$i]['image'] = $foundImages[1];

		$i++;
	}
}
$arrayAlbums = array_merge($arrayAlbumsClassic, $arrayAlbumsAdvanced, $arrayAlbumsPro);
$countAlbums = count($arrayAlbums);
?>

<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Photo albums' index page</title>
		<script type="text/javascript" src="cutString.js"></script>
		<script>
			var data = [];
		<?php
			for ($i=0; $i<$countAlbums; $i++)
			{	
				echo 'data[' . $i . '] = {"title": "' . $arrayAlbums[$i]['title'] . '", "description":"' . $arrayAlbums[$i]['description'] . '"};';
			}
		?>
	</script>

	</head>
	<body>
		<h1 style="text-align: center;">Albums</h1>
		<div id='darkoverlay' style='z-index: 9999; position: fixed; top: 30%; width: 100%; height: 40px; left: 0px; background: #fff url(loadingicon_page.gif) 50% 50% no-repeat;'> 
		</div>
	
		<div id="mainContent" style="width: 910px; overflow: auto; margin: 0 auto; visibility:hidden">
		<table border="0px" cellpadding="0px" cellspacing="10px">
			<tr>
 			<?php
				for ($i=0; $i<$countAlbums; $i++)
				{
					if ( (0 != ($i % 4)) || ( 0 == $i) )
					{
			?>
				<td>
					<table cellpadding="2" cellspacing="0" style="border: 1px #BDBFBE solid; width: 200px; max-width: 200px; height: 200px;">
						<tr>
							<td style="width: 200px; max-width: 200px; height: 200px; vertical-align: bottom;">
								<a href="<?=$arrayAlbums[$i]['directory'];?>" style="border: 0px">
								<div class="imgContainer" style="height: 200px; width: 200px; overflow: hidden;" id="imgContainer_<?=$i;?>">
								<img style="width: 200px; position: relative; border: 0px;" ID="albumImage_<?=$i;?>" title="" alt="" src="<?=$arrayAlbums[$i]['directory'] . '/' . $arrayAlbums[$i]['image'];?>" />
								</div>
								</a>
								<div style="background-color: black; opacity: 0.5; filter: alpha(opacity=50); width: 200px; max-width: 200px; height: 75px; position: relative; margin-top: -75px;"></div>
								<div style="width: 180px; height: 77px; position: relative; margin-top: -77px; padding-left: 10px;">
									<span style="color: white; font-weight: bold; font-family: Arial; font-size: 14px;" ID="albumTitle_<?=$i;?>"></span>
									<br/>
									<span style="position: relative; color: white; font-family: Arial; white-space: pre-line; word-wrap: break-word; font-size: 12px; width: 180px;" ID="albumDescription_<?=$i;?>"></span>
								</div>
							</td>
						</tr>
					</table>
				</td>
				<?php
				}
				else
				{
				?>
				</tr>
				<tr>
					<td>
					<table cellpadding="2" cellspacing="0" style="border: 1px #BDBFBE solid; width: 200px; max-width: 200px; height: 200px;">
						<tr>
							<td style="width: 200px; max-width: 200px; height: 200px; vertical-align: bottom;">
								<a href="<?=$arrayAlbums[$i]['directory'];?>" style="border: 0px">
								<div class="imgContainer" style="height: 200px; width:200px; overflow:hidden;" id="imgContainer_<?=$i;?>">
								<img style="width: 200px; position: relative; border: 0px;" ID="albumImage_<?=$i;?>" title="" alt="" src="<?=$arrayAlbums[$i]['directory'] . '/' . $arrayAlbums[$i]['image'];?>" />
								</div>
								</a>
								<div style="background-color: black; opacity: 0.5; filter: alpha(opacity=50); width: 200px; max-width: 200px; height: 75px; position: relative; margin-top: -75px;"></div>
								<div style="width: 180px; height: 77px; position: relative; margin-top: -77px; padding-left: 10px;">
									<span style="color: white; font-weight: bold; font-family: Arial; font-size: 14px;" ID="albumTitle_<?=$i;?>"></span>
									<br/>
									<span style="position: relative; color: white; font-family: Arial;white-space: pre-line: word-wrap: break-word; font-size: 12px; width: 180px;" ID="albumDescription_<?=$i;?>"></span>
								</div>
							</td>
						</tr>
					</table>
				</td>
				<?php
				}
				}
				?>
		</table>
		</div>
	</body>
</html>
