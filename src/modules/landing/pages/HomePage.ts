import { defineComponent, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, onUpdated, ref } from "vue";

export default defineComponent({
    setup: () => {
        console.log('setup');

        // propiedad reactiva:
        const counter = ref(0);

        // Ciclo de vida de componente:
        onMounted(() => {
            console.log('onMounted'); // Se muestra cuando ya hay referencias HTML, por ejemplo  un mapa
        });

        onUpdated(() => {
            console.log("onUpdated");
        });
        onUnmounted(() => {
            console.log("onUnmounted");
        });
        onBeforeMount(() => {
            console.log("onBeforeMount"); // se muestra antes que se monte el componente, aun no hay referencias HTML
        });
        onBeforeUpdate(() => {
            console.log("onBeforeUpdate");
        });
        onBeforeUnmount(() => {
            console.log("onBeforeUnmount");
        });
        onErrorCaptured(() => {
            console.log("onErrorCaptured");
        });
        onRenderTracked(() => {
            console.log("onRenderTracked");
        });
        onRenderTriggered(() => {
            console.log("onRenderTriggered");
        });
        onActivated(() => {
            console.log("onActivated");
        });
        onDeactivated(() => {
            console.log("onDeactivated");
        });

        return { counter }
    }
})