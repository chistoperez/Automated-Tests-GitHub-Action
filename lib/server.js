const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const FizzbuzzService = require("./services/FizzbuzzService");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
  response.json({ message: "FizzBuzz Api welcome!" });
});

app.get("/v1/explorers/:mission", (req, res) => {
  const mission = req.params.mission;
  const explorersInMission = ExplorerController.getExplorersByMission(mission);
  res.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
  const mission = req.params.mission;
  const explorersAmountInMission =
    ExplorerController.getExplorersAmountByMission(mission);
  res.json({
    mission: req.params.mission,
    quantity: explorersAmountInMission,
  });
});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
  const mission = req.params.mission;
  const explorersAmountInMission =
    ExplorerController.getExplorersUsernamesByMission(mission);
  res.json({
    mission: req.params.mission,
    explorers: explorersAmountInMission,
  });
});

app.get("/v1/fizzbuzz/:number", (req, res) => {
  const number = req.params.number;
  const fizzbuzz = FizzbuzzService.applyValidationInNumber(number);
  res.json(fizzbuzz);
});

app.get("/v1/explorers/stack/:stack", (req, res) => {
  const stack = req.params.stack;
  const explorerWithStack = ExplorerController.getExplorersByStack(stack);
  res.json(explorerWithStack);
});

app.listen(port, () => {
  console.log(`FizzBuzz API in localhost:${port}`);
});
