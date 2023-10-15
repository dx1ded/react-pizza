import { useState, useMemo, Children, cloneElement } from "react"
import { StrategyProgress } from "./Strategy.styled"

export function MergeStrategies({ children }) {
  const [strategy, setStrategy] = useState(0)
  const [stage, setStage] = useState(0)
  const [item, setItem] = useState(0)

  const ranges = useMemo(
    () =>
      children.reduce(
        (acc, { props }, i) => (
          acc.push(
            Children.toArray(props.children).length +
              (i > 0 ? acc[i - 1] : i === 1 ? acc[i - 1] - 1 : 0)
          ),
          acc
        ),
        []
      ),
    [children]
  )

  const stagesList = useMemo(
    () =>
      children.reduce(
        (acc, _, i) => (
          acc.push([...Array(ranges[i] - (i > 0 ? ranges[i - 1] : 0)).keys()]),
          acc
        ),
        []
      ),
    [ranges, children]
  )

  const changeStage = (index) => {
    if (index === ranges[ranges.length - 1]) return

    const strategy = ranges.findIndex((i) => i > index)
    const stage = stagesList.flat()[index]

    setStrategy(strategy)
    setStage(stage)
    setItem(index)
  }

  const progressClickHandler = (index) => {
    if (item < index) return
    changeStage(index)
  }

  return (
    <div>
      <StrategyProgress>
        {stagesList
          .reduce(
            (acc, stages, i) => (
              i <= strategy ? acc.push(...stages) : acc.push([]), acc
            ),
            []
          )
          .map((_, i) => (
            <button
              type="button"
              key={i}
              aria-label={`Scene ${i + 1}`}
              className={item >= i ? "active" : ""}
              onClick={() => progressClickHandler(i)}
            />
          ))}
      </StrategyProgress>
      {cloneElement(children[strategy], {
        defaultStage: stage,
        setNextStage: () => changeStage(item + 1),
        setPrevStage: () => changeStage(item - 1),
      })}
    </div>
  )
}
