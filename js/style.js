	$(document).ready(function(){
						$('a[href^="#"]').click(function(){   //可以把href改成任何属性
							var idg=$(this).attr("href");
							var targetl=$(idg).offset().top;
							$('html,body').animate({scrollTop:targetl},500);
						});
					});
