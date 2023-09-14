export const Action = {
  Left: "Left",
  FastDrop: "FastDrop",
  Right: "Right",
  SlowDrop: "SlowDrop"
};

export const Key = {
  ArrowDown: Action.SlowDrop,
  ArrowLeft: Action.Left,
  ArrowRight: Action.Right,
  Space: Action.FastDrop
};

export const actionIsDrop = (action) =>
  [Action.SlowDrop, Action.FastDrop].includes(action);

export const actionForKey = (keyCode) => Key[keyCode];
