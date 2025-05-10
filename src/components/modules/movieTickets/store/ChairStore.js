import { defineStore } from "pinia";



export const useChairStore = defineStore('chairStore', {
    state: () => ({
        listSeat: [],
        total: 0,
        unitPrice: Number(12000),
        seatTotal: 0,
    }),
    actions: {
        getSeatTotal() {
            return this.seatTotal;
        },
        setSeaTotal(value) {
            this.seatTotal = value;
        },
        addChair(value) {
            this.listSeat.push(value)
        },
        deleteChair(id) {
            const index = this.listSeat.findIndex(c => c.id === id);

            if(index !== -1) {
                this.listSeat.splice(index, 1)
            }
        },
        getListSeat(){
            return this.listSeat;
        },
        getTotal() {
            return this.total;
        },
        setTotal(value) {
            this.total = value;
        },
        calculateTotal() {
            if(this.listSeat.length > 0) {
                this.total = this.listSeat.length * 12000;
                this.seatTotal += 1
            }
        },
        substractSeat() {
            if(this.listSeat.length >= 0) {
                this.total -= 12000;
                this.seatTotal -= 1
            }
        }
    }
})