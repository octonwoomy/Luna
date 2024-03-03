<script>
	import Prism from "prismjs";
	import Nav from "./nav.svelte";
	let code = `
package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

func returnJSON(context *gin.Context) {
	file, err := os.Open("data.json")
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
	router.GET("/data", returnJSON)
	err := router.Run("localhost:6969")
	if err != nil {
		fmt.Println("Error starting the server:", err)
	}
}

    `;
	let language = "clike";
</script>

<Nav />
<div class="container">
	<div class="code">
		{@html Prism.highlight(code, Prism.languages[language], "go")}
	</div>
</div>

<style>
	.container {
		width: 500px;
	}
	.code {
		background-color: rgba(0, 0, 0);
		white-space: pre-wrap;
	}
</style>
