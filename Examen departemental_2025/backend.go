package main

import (
    "encoding/json"
    "net/http"
    "github.com/gorilla/mux"
)

var lightState = false

func getStatus(w http.ResponseWriter, r *http.Request) {
    json.NewEncoder(w).Encode(map[string]bool{"lightOn": lightState})
}

func toggleLight(w http.ResponseWriter, r *http.Request) {
    lightState = !lightState
    json.NewEncoder(w).Encode(map[string]string{"status": "updated"})
}

func main() {
    r := mux.NewRouter()
    r.HandleFunc("/api/status", getStatus).Methods("GET")
    r.HandleFunc("/api/toggle", toggleLight).Methods("POST")
    http.ListenAndServe(":8080", r)
}
