<template>
    <div>
        <button @click="add">{{ num }}</button>
        <button @click="user.add()">Pina: {{ user.count }}</button>
        <div>Hello SFC
        </div>
        <router-view></router-view>
    </div>


</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "~/stores/user";
const user = useUserStore()

const num = ref(0);
const add = () => {
    num.value++;
};
</script>