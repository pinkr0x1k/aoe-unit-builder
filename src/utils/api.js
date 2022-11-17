import units from "./data/age-of-empires-units.json";

export const loadUnitsApi = () => {
  const objectArray = Object.values(units.units);
  return objectArray.map((unit) => {
    if (unit.cost === undefined || unit.cost == null) {
      return {
        ...unit,
        cost: {
          Wood: 0,
          Gold: 0,
          Food: 0,
        },
      };
    }
    return {
      ...unit,
      cost: {
        Wood: unit.cost.Wood || 0,
        Gold: unit.cost.Gold || 0,
        Food: unit.cost.Food || 0,
      },
    };
  });
};
