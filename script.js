   const popup = document.querySelector(".popup");
   const wifiIcon = document.querySelector(".icon i");
   const popupTitle = document.querySelector(".popup .title");
   const popupDecs = document.querySelector(".desc");
   const reconnectBtn = document.querySelector(".reconnect");

   let isOnline = true,IntervalId, timer = 10;
   const checkConnection = async () => {
     try {

          const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
          isOnline = response.status >= 200 && response.status < 300;
          

     } catch (err) {

          isOnline = false;

     }
       timer = 10;
     clearInterval(IntervalId)
     handlePopup(isOnline);
 {

 }  

}
