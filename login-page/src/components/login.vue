<template>
  <div id="app">
    <section class="hero is-light is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centerd">
          <articile v-show="errorMessage" class="message is-warning">
            <div class="message-body">
              {{$t(errorMessage) }}
            </div>
          </articile>
          <div class="column is-4 is-offset-4">
            <div class="box">
              <div class="field">
                <div class="control"
</template>