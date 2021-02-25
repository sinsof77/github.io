init = function(){
      jarallax = new Jarallax();
      
      jarallax.setDefault('.img1, .img2, .img3, .img4, #head1, #head2, #head3, #head4, #p1, #p2, #p3, #p4', {opacity:'0'});
      jarallax.setDefault('#p1, #p2, #p3, #p4', {marginLeft:'-1000px'});

      jarallax.addAnimation('.bg2',[{progress: "0%", top:"0%"}, {progress: "100%", top: "-50%"}]);
      jarallax.addAnimation('.bg1',[{progress: "0%", top:"0%"}, {progress: "100%", top: "-35%"}]);
      jarallax.addAnimation('.bg0',[{progress: "0%", top:"0%"}, {progress: "100%", top: "-20%"}]);

	  jarallax.addAnimation('#head0',[{progress: "0%", left:"100px"}, {progress: "10%", left: "100px"}]);
      jarallax.addAnimation('#head0',[{progress: "10%", left:"100px"}, {progress: "20%", left: "150px"}]);
      jarallax.addAnimation('#head0',[{progress: "0%", opacity:"1"}, {progress: "10%", opacity:"1"}]);
      jarallax.addAnimation('#head0',[{progress: "10%", opacity:"1"}, {progress: "20%", opacity:"0"}]);

      jarallax.addAnimation('#head1',[{progress: "20%", left:"-800px"}, {progress: "30%", left: "100px"}]);
      jarallax.addAnimation('#head1',[{progress: "30%", left:"100px"}, {progress: "40%", left: "150px"}]);
      jarallax.addAnimation('#head1',[{progress: "20%", opacity:"1"}, {progress: "30%", opacity:"1"}]);
      jarallax.addAnimation('#head1',[{progress: "30%", opacity:"1"}, {progress: "40%", opacity:"0"}]);
      
      jarallax.addAnimation('#head2',[{progress: "40%", left:"-800px"}, {progress: "50%", left: "100px"}]);
      jarallax.addAnimation('#head2',[{progress: "50%", left:"100px"}, {progress: "60%", left: "150px"}]);
      jarallax.addAnimation('#head2',[{progress: "40%", opacity:"1"}, {progress: "50%", opacity:"1"}]);
      jarallax.addAnimation('#head2',[{progress: "50%", opacity:"1"}, {progress: "60%", opacity:"0"}]);
      
      jarallax.addAnimation('#head3',[{progress: "60%", left:"-800px"}, {progress: "70%", left: "100px"}]);
      jarallax.addAnimation('#head3',[{progress: "70%", left:"100px"}, {progress: "80%", left: "150px"}]);
      jarallax.addAnimation('#head3',[{progress: "60%", opacity:"1"}, {progress: "70%", opacity:"1"}]);
      jarallax.addAnimation('#head3',[{progress: "70%", opacity:"1"}, {progress: "80%", opacity:"0"}]);

	  jarallax.addAnimation('#head4',[{progress: "80%", left:"-800px"}, {progress: "90%", left: "100px"}]);
      jarallax.addAnimation('#head4',[{progress: "90%", left:"100px"}, {progress: "100%", left: "150px"}]);
      jarallax.addAnimation('#head4',[{progress: "80%", opacity:"1"}, {progress: "90%", opacity:"1"}]);
      jarallax.addAnimation('#head4',[{progress: "90%", opacity:"1"}, {progress: "100%", opacity:"1"}]);



	  jarallax.addAnimation('#p0',[{progress: "0%", opacity:"1"}, {progress: "10%", opacity:"1"}]);
      jarallax.addAnimation('#p0',[{progress: "10%", opacity:"1"}, {progress: "20%", opacity:"0"}]);
	  jarallax.addAnimation('#p0',[{progress: "10%", marginLeft:"0"}, {progress: "20%", opacity:"0"}]);
      
      jarallax.addAnimation('#p1',[{progress: "20%", opacity:"0"}, {progress: "30%", opacity:"1"}]);
      jarallax.addAnimation('#p1',[{progress: "30%", opacity:"1"}, {progress: "40%"}]);
      jarallax.addAnimation('#p1',[{progress: "30%", marginLeft:"0"}, {progress: "40%", opacity:"0"}]);
      
      jarallax.addAnimation('#p2',[{progress: "40%", opacity:"0"}, {progress: "50%", opacity:"1"}]);
      jarallax.addAnimation('#p2',[{progress: "50%", opacity:"1"}, {progress: "60%"}]); 
      jarallax.addAnimation('#p2',[{progress: "50%", marginLeft:"0"}, {progress: "60%", opacity:"0"}]);

	  jarallax.addAnimation('#p3',[{progress: "60%", opacity:"0"}, {progress: "70%", opacity:"1"}]);
      jarallax.addAnimation('#p3',[{progress: "70%", opacity:"1"}, {progress: "80%"}]); 
      jarallax.addAnimation('#p3',[{progress: "70%", marginLeft:"0"}, {progress: "80%", opacity:"0"}]);
      
      jarallax.addAnimation('#p4',[{progress: "80%", opacity:"0"}, {progress: "90%", opacity:"1"}]);
      jarallax.addAnimation('#p4',[{progress: "90%", opacity:"1"}, {progress: "100%"}]);
      jarallax.addAnimation('#p4',[{progress: "90%", marginLeft:"0"}, {progress: "100%"}]);



	  jarallax.addAnimation('.img0',[{progress: "0%", opacity:"1"}, {progress: "10%", opacity:"1"}]);
      jarallax.addAnimation('.img0',[{progress: "10%", opacity:"1"}, {progress: "20%", opacity:"0"}]);
	  jarallax.addAnimation('.img3',[{progress: "10%", marginLeft:"0"}, {progress: "20%", opacity:"0"}]);
      
      jarallax.addAnimation('.img1',[{progress: "20%", opacity:"0"}, {progress: "30%", opacity:"1"}]);
      jarallax.addAnimation('.img1',[{progress: "30%", opacity:"1"}, {progress: "40%"}]);
      jarallax.addAnimation('.img1',[{progress: "30%", marginLeft:"0"}, {progress: "40%", opacity:"0"}]);
      
      jarallax.addAnimation('.img2',[{progress: "40%", opacity:"0"}, {progress: "50%", opacity:"1"}]);
      jarallax.addAnimation('.img2',[{progress: "50%", opacity:"1"}, {progress: "60%"}]); 
      jarallax.addAnimation('.img2',[{progress: "50%", marginLeft:"0"}, {progress: "60%", opacity:"0"}]);

	  jarallax.addAnimation('.img3',[{progress: "60%", opacity:"0"}, {progress: "70%", opacity:"1"}]);
      jarallax.addAnimation('.img3',[{progress: "70%", opacity:"1"}, {progress: "80%"}]);
      jarallax.addAnimation('.img3',[{progress: "70%", marginLeft:"0"}, {progress: "80%", opacity:"0"}]);
      
      jarallax.addAnimation('.img4',[{progress: "80%", opacity:"0"}, {progress: "90%", opacity:"1"}]);
      jarallax.addAnimation('.img4',[{progress: "90%", opacity:"1"}, {progress: "100%"}]);
      jarallax.addAnimation('.img4',[{progress: "90%", marginLeft:"0"}, {progress: "100%"}]);

    }
