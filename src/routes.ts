import { UserController } from "./controller/UserController";
import { RideController } from "./controller/RideController";
import { User } from "./entity/User";

export const Routes = [
  // =======================================
  // User
  // =======================================

  {
    method: "get",
    route: "/api/user",
    controller: UserController,
    action: "all",
  },
  {
    method: "get",
    route: "/api/user/:id",
    controller: UserController,
    action: "one",
  },
  {
    method: "post",
    route: "/api/user",
    controller: UserController,
    action: "save",
  },
  {
    method: "delete",
    route: "/api/user/:id",
    controller: UserController,
    action: "remove",
  },

  // =======================================
  // Ride
  // =======================================

  {
    method: "get",
    route: "/api/ride",
    controller: RideController,
    action: "all",
  },
  {
    method: "get",
    route: "/api/ride/:id",
    controller: RideController,
    action: "one",
  },
  {
    method: "post",
    route: "/api/ride",
    controller: RideController,
    action: "save",
  },
  {
    method: "delete",
    route: "/api/ride/:id",
    controller: RideController,
    action: "remove",
  },
];
