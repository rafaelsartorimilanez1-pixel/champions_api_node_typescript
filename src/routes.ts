import {Router} from 'express';
import * as PlayerController from './controller/player-controllers';
import * as ClubsController from './controller/clubs-controller'

const router = Router();

router.get("/players", PlayerController.getPlayer)
router.get("/players/:id", PlayerController.getPlayerById)
router.post("/players", PlayerController.postPlayer)
router.delete("/players/:id", PlayerController.deletePlayer)
router.patch("/players/:id", PlayerController.updatePlayer)


router.get("/clubs", ClubsController.getClubs)
router.get("/clubs/:id", ClubsController.getClubById)
router.post("/clubs", ClubsController.postClub)
router.delete("/clubs/:id", ClubsController.deleteClubById)

export default router