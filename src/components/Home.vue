<template>
   <h3>Home</h3>
</template>


<script>
import axios from 'axios'

export default {
    components: 'Home',
    async created(){
        const response = await axios.get('user');

        console.log(response);
    }
}

</script>