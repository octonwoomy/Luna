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
<main>
	<h1>REST API in golang</h1>
	<div class="code">
		{@html Prism.highlight(code, Prism.languages[language], "go")}
	</div>
</main>

<style>
	main > h1 {
		text-align: center;
	}
	main {
		padding-top: 45px;
	}

	.code {
		background: none;
		width: 30%;
		margin-left: 400px;
		padding: 45px;
		background-color: rgba(0, 0, 0);
		white-space: pre-wrap;
	}
</style>
