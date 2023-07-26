<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const dummyData = {
  // 請貼上資料樣本
};

const restaurant = ref({
  id: -1,
  name: '',
  categoryName: '',
  image: '',
  openingHours: '',
  tel: '',
  address: '',
  description: '',
  isFavorited: false,
  isLiked: false,
});
const router = useRouter();
const restaurantComments = ref([]);
onMounted(() => {
  const { id: restaurantId } = router.params;
  fetchRestaurant(restaurantId);
});

function fetchRestaurant(restaurantId) {
  console.log('fetchRestaurant id: ', restaurantId);

  restaurant.value = {
    id: dummyData.restaurant.id,
    name: dummyData.restaurant.name,
    categoryName: dummyData.restaurant.Category.name,
    image: dummyData.restaurant.image,
    openingHours: dummyData.restaurant.opening_hours,
    tel: dummyData.restaurant.tel,
    address: dummyData.restaurant.address,
    description: dummyData.restaurant.description,
    isFavorited: dummyData.isFavorited,
    isLiked: dummyData.isLiked,
  };

  restaurantComments.value = dummyData.restaurant.Comments;
}
</script>

<template>
  <h3>ItemDetail</h3>
  <img
    class="card-img-top"
    :src="item.image"
    alt="Card image cap"
    width="286px"
    height="180px">
  <p>{{ item.name }}</p>
  <p>{{ item.price }}</p>
  <p>{{ item.category }}</p>
  <p>{{stock.size}}</p>
  <p>{{stock.color}}</p>
  <p> {{stock.itemStock}} </p>
  <p>庫存量</p>
  <p> {{stock.itemStock}} </p>
  <p>商品詳細資訊</p>
  <p> {{item.description}} </p>
  <p> 數量： </p>
  <p> {{item.quantity}} </p>
  <button type="button" class="btn btn-danger btn-border favorite mr-2">
    加到購物車
  </button>

</template>