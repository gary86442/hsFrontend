<script setup>

import { NImage, NIcon } from 'naive-ui'

</script>
  <template>
    <nav class="navbar navbar-expand navbar-dark bg-custom">
        <div class="navbar-nav">
        <n-image class="logo" height="50" width="250" src="https://i.imgur.com/VVLoUqg.png" />
        <div class="navbar-link">
        <n-icon size="35" color="#ffffff" class="btn btn-link nav-item nav-link"  >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M2.997 3.496a.5.5 0 0 1 .5-.5h.438c.727 0 1.145.473 1.387.945c.165.323.284.717.383 1.059H16a1 1 0 0 1 .962 1.272l-1.496 5.275A2 2 0 0 1 13.542 13H8.463a2 2 0 0 1-1.93-1.473l-.642-2.355a.513.513 0 0 1-.01-.032L4.85 5.643l-.1-.337c-.1-.346-.188-.652-.32-.909c-.159-.31-.305-.4-.496-.4h-.438a.5.5 0 0 1-.5-.5zM8.5 17a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3z" fill="currentColor"></path></g></svg>
        </n-icon>
        <n-icon size="35" color="#ffffff" class="btn btn-link nav-item nav-link"  >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12"><g fill="none"><path d="M6 1a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm2.5 5h-5A1.5 1.5 0 0 0 2 7.5c0 1.116.459 2.01 1.212 2.615C3.953 10.71 4.947 11 6 11c1.053 0 2.047-.29 2.788-.885C9.54 9.51 10 8.616 10 7.5A1.5 1.5 0 0 0 8.5 6z" fill="currentColor"></path></g></svg>
        </n-icon>
        </div>
        </div>
    </nav>
</template>

<style>
.navbar {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
}
.navbar-nav{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-right: 100px;
    margin-bottom: 10px;
    
}
.navbar-link {
display: flex;
justify-content: space-around;
align-items: flex-end;
margin-top: 7px;
margin-left:400px
}

.bg-custom {
    background-color: #800000; 
}
    .icon svg:hover {
    transform: scale(1.1); 
}
.n-icon {
    size:40;
    margin-left: auto;
    margin-right: 10px;
    position: relative;
}
.btn {
        transition: fill 0.3s ease; 
    }
svg:hover path {
    fill: red;
}

    
  
</style>