<script>
  import Prism from 'prismjs';
  import Nav from './nav.svelte';
  let code = 
    `
package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

func returnJSON(context *gin.Context) {
	file, err := os.Open("dummy.json")
	if err != nil {
		fmt.Println("Error opening file:", err)
		return
	}
	defer file.Close()
	var data map[string]interface{}
	decoder := json.NewDecoder(file)
	err = decoder.Decode(&data)
	if err != nil {
		fmt.Println("Error decoding JSON:", err)
		return
	}
	context.IndentedJSON(http.StatusOK, data)
}

func main() {
	router := gin.Default()
	router.GET("/dummy", returnJSON)
	err := router.Run("localhost:0063")
	if err != nil {
		fmt.Println("Error starting the server:", err)
	}
}

    `;
  let language = 'clike';
</script>
<Nav />
<div class="code">
  {@html Prism.highlight(code, Prism.languages[language], "c")}
</div>


<style>
  .code {
    white-space: pre-wrap;
  }
</style>
