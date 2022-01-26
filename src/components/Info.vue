<template>
   <div class="info">
      <span> <b>TIP:</b> Double click to mark as complete </span>
      <span>
         <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
         <span class="complete-box"></span> = Complete
      </span>
   </div>
</template>

<script>
   export default {
      name: 'Info'
   }
</script>

<style scoped>
   .info {
      margin-top: 30px;
      display: flex;
      justify-content: space-around;
      align-items: center;
   }

   span {
      display: inline-block;
   }

   .info > span {
      display: inline-flex;
      align-items: center;
      gap: 10px;
   }

   .incomplete-box, .complete-box {
      width: 20px;
      height: 20px;
   }

   .complete-box {
       background: #35495e;
   }

   .incomplete-box {
      background: #41b883;
   }

   @media (max-width: 600px) {
      .info {
         flex-direction: column;
         gap: 10px;
      }
   }

</style>