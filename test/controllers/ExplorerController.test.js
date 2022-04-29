const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () => {
  test("Explorers by mission", () => {
    const explorersInNode = ExplorerController.getExplorersByMission("node");
    expect(explorersInNode).toStrictEqual([
      {
        githubUsername: "ajolonauta1",
        mission: "node",
        name: "Woopa1",
        score: 1,
        stacks: ["javascript", "reasonML", "elm"],
      },
      {
        githubUsername: "ajolonauta2",
        mission: "node",
        name: "Woopa2",
        score: 2,
        stacks: ["javascript", "groovy", "elm"],
      },
      {
        githubUsername: "ajolonauta3",
        mission: "node",
        name: "Woopa3",
        score: 3,
        stacks: ["elixir", "groovy", "reasonML"],
      },
      {
        githubUsername: "ajolonauta4",
        mission: "node",
        name: "Woopa4",
        score: 4,
        stacks: ["javascript"],
      },
      {
        githubUsername: "ajolonauta5",
        mission: "node",
        name: "Woopa5",
        score: 5,
        stacks: ["javascript", "elixir", "elm"],
      },
      {
        githubUsername: "ajolonauta11",
        mission: "node",
        name: "Woopa11",
        score: 11,
        stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
      },
      {
        githubUsername: "ajolonauta12",
        mission: "node",
        name: "Woopa12",
        score: 12,
        stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
      },
      {
        githubUsername: "ajolonauta13",
        mission: "node",
        name: "Woopa13",
        score: 13,
        stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
      },
      {
        githubUsername: "ajolonauta14",
        mission: "node",
        name: "Woopa14",
        score: 14,
        stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
      },
      {
        githubUsername: "ajolonauta15",
        mission: "node",
        name: "Woopa15",
        score: 15,
        stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
      },
    ]);
  });
  test("Amount of explorers by mission", () => {
    const amountExplorers =
      ExplorerController.getExplorersAmountByMission("node");
    expect(amountExplorers).toBe(10);
  });
  test("Explorer Usernames by mission", () => {
    const usernames = ExplorerController.getExplorersUsernamesByMission("node");
    expect(usernames).toStrictEqual([
      "ajolonauta1",
      "ajolonauta2",
      "ajolonauta3",
      "ajolonauta4",
      "ajolonauta5",
      "ajolonauta11",
      "ajolonauta12",
      "ajolonauta13",
      "ajolonauta14",
      "ajolonauta15",
    ]);
  });
  test("explorers by stack", () => {
    const amountExplorers =
      ExplorerController.getExplorersByStack("javascript");
    expect(amountExplorers).toStrictEqual([
      {
        githubUsername: "ajolonauta1",
        mission: "node",
        name: "Woopa1",
        score: 1,
        stacks: ["javascript", "reasonML", "elm"],
      },
      {
        githubUsername: "ajolonauta2",
        mission: "node",
        name: "Woopa2",
        score: 2,
        stacks: ["javascript", "groovy", "elm"],
      },
      {
        githubUsername: "ajolonauta4",
        mission: "node",
        name: "Woopa4",
        score: 4,
        stacks: ["javascript"],
      },
      {
        githubUsername: "ajolonauta5",
        mission: "node",
        name: "Woopa5",
        score: 5,
        stacks: ["javascript", "elixir", "elm"],
      },
      {
        githubUsername: "ajolonauta9",
        mission: "java",
        name: "Woopa9",
        score: 9,
        stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
      },
      {
        githubUsername: "ajolonauta10",
        mission: "java",
        name: "Woopa10",
        score: 10,
        stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
      },
      {
        githubUsername: "ajolonauta11",
        mission: "node",
        name: "Woopa11",
        score: 11,
        stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
      },
      {
        githubUsername: "ajolonauta12",
        mission: "node",
        name: "Woopa12",
        score: 12,
        stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
      },
      {
        githubUsername: "ajolonauta13",
        mission: "node",
        name: "Woopa13",
        score: 13,
        stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
      },
      {
        githubUsername: "ajolonauta14",
        mission: "node",
        name: "Woopa14",
        score: 14,
        stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
      },
      {
        name: "Woopa15",
        githubUsername: "ajolonauta15",
        score: 15,
        mission: "node",
        stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
      },
    ]);
  });
});
