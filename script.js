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

const handlePopup = (status) => {
     if(status) {
          wifiIcon.className = "uil uil-wifi"
          popupTitle.innerText = "restored connection"
          popupDecs.innerHTML = "Your device is now successfully connected to the internet." 
          popup.classList.add("online")
          return setTimeout(() => { popup.classList.remove('show','online')},2000) ;
     }
     wifiIcon.className = "uil uil-wifi-slash"
     popupTitle.innerText = "Lost connection"
     popupDecs.innerHTML = "Your network is unavailable. We will  attempt to reconnect you in <b>10</b> seconds." 
     popup.className = "popup show"

     IntervalId = setInterval(()=> {
           timer--;

           if(timer === 0) checkConnection();

           
           popup.querySelector(".desc b").innerText = timer
     },1000)
}

setInterval(() =>isOnline && checkConnection(), 3000);

reconnectBtn.addEventListener('click', checkConnection)