import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Ride} from "../entity/Ride";

export class RideController {

    private rideRepository = getRepository(Ride);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.rideRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.rideRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.rideRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let rideToRemove = await this.rideRepository.findOne(request.params.id);
        await this.rideRepository.remove(rideToRemove);
    }

}