// import test from "node:test";
// import ParkingLot from "parkingLot";
// import ParkingLot from "ParkingLot";
const ParkingLot = require("./parkingLot");

test("Parking Lot has no slots before initializing", () => {
    expect(new ParkingLot().slots).toEqual([null]);
});

test("Parking Lot with size 4 has 4 available slots", () => {
    var parkingLot = new ParkingLot(4);
    expect(parkingLot.getSize()).toBe(4);
});

test("Parking Lot with size 2 has all slots empty when initialized", () => {
    var parkingLot = new ParkingLot(2);
    expect(parkingLot.getFirstEmptySlot()).toBe(0);
    expect(parkingLot.slots).toEqual([null, null]);
});

test("Parking Lot with size 3 has 3 available slot when initialized", () => {
    var parkingLot = new ParkingLot(3);
    expect(parkingLot.getEmptySlots()).toBe(3);
});

test("Parking Lot with size 3 can add 1 car", () => {
    var parkingLot = new ParkingLot(3);
    expect(parkingLot.park(5)).toBe(5);
    expect(parkingLot.slots).toEqual([5, null, null]);
    expect(parkingLot.isFull()).toBe(false);
});

test("Parking Lot with size 0 don't have empty slots", () => {
    var parkingLot = new ParkingLot(0);
    expect(parkingLot.getEmptySlots()).toBe(0);
    expect(parkingLot.getFirstEmptySlot()).toBe(-1);
});

test("Parking Lot with size 1 can't add 2 cars", () => {
    var parkingLot = new ParkingLot(1);
    expect(parkingLot.park(5)).toBe(5);
    expect(parkingLot.slots).toEqual([5]);

    expect(parkingLot.park(10)).toBe(-1);
    expect(parkingLot.slots).toEqual([5]);
    expect(parkingLot.isFull()).toBe(true);
});

test("Parking Lot can remove car that was parked", () => {
    var parkingLot = new ParkingLot(1);
    expect(parkingLot.park(5)).toBe(5);
    expect(parkingLot.remove(5)).toBe(5);
});

test("Parking Lot can't remove car not found", () => {
    var parkingLot = new ParkingLot(2);
    expect(parkingLot.park(5)).toBe(5);
    expect(parkingLot.remove(50)).toBe(-1);
});

test("Parking Lot with size 1 without empty slots", () => {
    var parkingLot = new ParkingLot(1);
    parkingLot.park(5);
    expect(parkingLot.getEmptySlots()).toBe(0);
    expect(parkingLot.getFirstEmptySlot()).toBe(-1);
});