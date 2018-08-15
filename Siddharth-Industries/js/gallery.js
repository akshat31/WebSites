$(document).ready(function(){
   
             var data = [];
     
     /*
      *getData method fetches data from mongo db and renders into gallery.hbs view
      * 
      */
                        var getData = function(){
                            
                                 var obj = new Object(
                                 {
                                       'id':'2',
                                       'path': 'testimg/demo01.jpg',
                                       'title': 'Dragon Flies',
                                       'description': 'Dragon Flies',
                                       'category': '',
                                       'date': 'Tue Dec 06 2016 11:20:18 GMT+0000 (GMT)'
                                 });

                                    data.push(obj);
                                 var obj = new Object(
                                 {
                                       'id':'3',
                                       'path': 'testimg/demo02.jpg',
                                       'title': 'Christmas Decoration Snow Man',
                                       'description': 'Very beutufull christmas decoration for your christmas tree, Red Snow Man',
                                       'category': '',
                                       'date': 'Tue Dec 06 2016 09:19:14 GMT+0000 (GMT)'
                                 });

                                    data.push(obj);
                                 var obj = new Object(
                                 {
                                       'id':'4',
                                       'path': 'testimg/demo03.jpg',
                                       'title': 'Christmas Decoration House',
                                       'description': 'Beutifull christmas decoration for your home',
                                       'category': '',
                                       'date': 'Tue Dec 06 2016 09:19:56 GMT+0000 (GMT)'
                                 });

                                    data.push(obj);
                                 var obj = new Object(
                                 {
                                       'id':'5',
                                       'path': 'testimg/demo04.jpg',
                                       'title': 'Lantern Butterfly Effect',
                                       'description': 'Lantern Butterfly Effect',
                                       'category': '',
                                       'date': 'Tue Dec 06 2016 09:20:18 GMT+0000 (GMT)'
                                 });

                                    data.push(obj);
                                 var obj = new Object(
                                 {
                                       'id':'1',
                                       'path': 'testimg/demo05.jpg',
                                       'title': 'Post Box Galaxy Eye',
                                       'description': 'Hand made in Ireland Stained Glass Post Box, The produsct name Galaxy Eye',
                                       'category': '',
                                       'date': 'Tue Dec 06 2016 09:49:58 GMT+0000 (GMT)'
                                 });

                                    data.push(obj);
                                 var obj = new Object(
                                 {
                                       'id':'6',
                                       'path': 'testimg/demo06.jpg',
                                       'title': 'Moon Tree Lantern',
                                       'description': 'Moon Tree Lantern',
                                       'category': '',
                                       'date': 'Tue Dec 06 2016 10:20:18 GMT+0000 (GMT)'
                                 });

                                    data.push(obj);
                                 var obj = new Object(
                                 {
                                       'id':'7',
                                       'path': 'testimg/demo07.jpg',
                                       'title': 'Christmas Decoration Angel',
                                       'description': 'Christmas Decoration Angel',
                                       'category': '',
                                       'date': 'Tue Dec 06 2016 13:20:18 GMT+0000 (GMT)'
                                 });

                                    data.push(obj);
                                 var obj = new Object(
                                 {
                                       'id':'8',
                                       'path': 'testimg/demo08.jpg',
                                       'title': 'Christmas Decoration Christmas Tree',
                                       'description': 'Christmas Tree',
                                       'category': '',
                                       'date': 'Tue Dec 06 2016 15:49:18 GMT+0000 (GMT)'
                                 });

                                    data.push(obj);
                                 var obj = new Object(
                                 {
                                       'id':'9',
                                       'path': 'testimg/demo09.jpg',
                                       'title': 'Christmas Decoration Christmas Tree',
                                       'description': 'Christmas Tree',
                                       'category': '',
                                       'date': 'Tue Dec 06 2016 16:10:18 GMT+0000 (GMT)'
                                 });

                                    data.push(obj);
                                 var obj = new Object(
                                 {
                                       'id':'10',
                                       'path': 'testimg/demo10.jpg',
                                       'title': 'Lanter Fish on Drifted Wood',
                                       'description': 'Fish Lantern on drifted Wood',
                                       'category': '',
                                       'date': 'Tue Dec 06 2016 16:57:18 GMT+0000 (GMT)'
                                 });

                                 //    data.push(obj);
                                 // var obj = new Object(
                                 // {
                                 //       'id':'11',
                                 //       'path': 'https://s3-eu-west-1.amazonaws.com/imagestramorestainedglass/lanternleafe(150x150).png',
                                 //       'title': 'Lantern Leave',
                                 //       'description': 'Lantern Leave Effect',
                                 //       'category': '',
                                 //       'date': 'Tue Dec 06 2016 16:57:18 GMT+0000 (GMT)'
                                 // });

                                    data.push(obj);
                        }//end getData


                    var check = function(param,callback, callback2){
                       
                       if(!param.length){
                          if(callback && typeof(callback) === 'function'){
                                callback();
                           if(callback2 && typeof(callback2) === 'function'){
                                callback2();
                           }
                        }
                       }
                    }
           
            var slider = function(){

             $('.container01').attr({'id':'slider-container'});
             $('#slider-container').append($('<div/>',{'id':'main_area'}));
             $('#main_area').append($('<div/>',{'class':'row', 'id':'slider-row'}));
             $('#slider-row').append($('<div/>',{'class':'col-sm-6', 'id':'slider-thumbs'}));
             $('#slider-thumbs').append($('<ul/>',{'class':'hide-bullets'}));

                  for(var x in data){
                     $('.hide-bullets').append($('<li/>',{'class':'col-sm-3','id':'li-'+x}));
                     $('#li-'+x).append($('<a/>',{'class':'thumbnail', 'id':'carousel-selector-'+x}));
                     $('#carousel-selector-'+x).append($('<img/>',{'src':data[x].path}));
                  }

                          $('#slider-row').append($('<div/>',{'class':'col-sm-6','id':'slider-big'}));
                          $('#slider-big').append($('<div/>',{'class':'col-xs-12','id':'slider'}));
                          $('#slider').append($('<div/>',{'class':'row','id':'row-big'}));
                          $('#row-big').append($('<div/>',{'class':'col-sm-12','id':'carousel-bounding-box'}));
                          $('#carousel-bounding-box').append($('<div/>',{'class':'carousel slide','id':'myCarousel'}));
                          $('#myCarousel').append($('<div/>',{'class':'carousel-inner'}));

              for(var x in data){
                  
                 var image = new Image(470, 480);
                 var cut = data[x].path.length;
                 image.src = data[x].path.substring(0,(cut - 0));
                 image.src = image.src;

                $('.carousel-inner').append($('<div/>',{'class':'item', 'data-slide-number': x, 'id':'item-'+x}));
                $('#item-'+x).append(image);

                if(x == 0){
                    $('#item-'+x).attr({'class':'item active'});
                }
              }
                    
        };//end Slider
                     

    

              /*
               *Call functions
               */    
               
               check(data,getData,slider);

            /*
             *This is original jquery method 
             */

                    $('#myCarousel').carousel({
                        interval: 5000
                    });
         
                //Handles the carousel thumbnails
                $('[id^=carousel-selector-]').click(function () {
                var id_selector = $(this).attr("id");
                //console.log(id_selector);
                try {
                    var id = /-(\d+)$/.exec(id_selector)[1];
                    //console.log(id_selector, id);
                    jQuery('#myCarousel').carousel(parseInt(id));
                } catch (e) {
                    console.log('Regex failed!', e);
                }
                });
                // When the carousel slides, auto update the text
                $('#myCarousel').on('slid.bs.carousel', function (e) {
                         var id = $('.item.active').data('slide-number');
                        $('#carousel-text').html($('#slide-content-'+id).html());
                });

             
  });