"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const busScheduleController_1 = require("../controllers/busScheduleController");
const auth_1 = require("../middleware/auth");
const validation_1 = require("../middleware/validation");
const router = express_1.default.Router();
router.post('/', auth_1.authenticate, (0, auth_1.authorize)('admin', 'driver'), validation_1.validateBusSchedule, busScheduleController_1.createBusSchedule);
router.get('/', busScheduleController_1.getAllBusSchedules);
router.get('/:id', busScheduleController_1.getBusScheduleById);
router.put('/:id', auth_1.authenticate, (0, auth_1.authorize)('admin', 'driver'), busScheduleController_1.updateBusSchedule);
router.patch('/:id/arrival', auth_1.authenticate, (0, auth_1.authorize)('driver'), busScheduleController_1.updateArrivalTime);
router.get('/:id/interested-users', auth_1.authenticate, (0, auth_1.authorize)('driver', 'admin'), busScheduleController_1.getInterestedUsers);
router.delete('/:id', auth_1.authenticate, (0, auth_1.authorize)('admin'), busScheduleController_1.deleteBusSchedule);
exports.default = router;
