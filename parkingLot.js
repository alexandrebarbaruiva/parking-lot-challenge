class ParkingLot {
    // slots = []; // Where cars will remain

    constructor(parkingSize) {
        this.slots = new Array(parkingSize).fill(null);
    }

    getFirstEmptySlot() {
        return this.slots.findIndex((slot) => slot == null);
    }

    // Get parking lot size
    getSize() {
        return this.slots.length;
    }

    // Get number of available slots in parking lot
    getEmptySlots() {
        return this.slots.filter((slot) => slot == null).length;
    }

    // Add car
    // Add to slot until full, if full, don't add
    park(carId) {
        var emptySlot = this.getFirstEmptySlot()
        if (emptySlot === -1) {
            return emptySlot
        }
        this.slots[emptySlot] = carId;
        return carId;
    }

    // Remove car
    // Remove car from slots until empty, if empty or not found, don't remove
    remove(carId) {
        var carIndex = this.slots.indexOf(carId);
        if (carIndex == -1) {
            return -1;
        }
        this.slots[carIndex] = null;
        return carId
    }

    isFull(){
        return this.getEmptySlots() === 0;
    }
}

// export default ParkingLot;
module.exports = ParkingLot;