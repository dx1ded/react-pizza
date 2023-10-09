import { useState, cloneElement } from "react"
import {
  StrategyProgress,
  StrategyTitle,
  StyledStrategy,
} from "./Strategy.styled"

export function Strategy({ children }) {
  const [stage, setStage] = useState(0)
  const [data, setData] = useState({})

  const changeStage = (i) => {
    if (i > stage) return
    setStage(i)
  }

  return (
    <StyledStrategy>
      <StrategyProgress>
        {children.map((_, i) => (
          <button
            type="button"
            key={i}
            aria-label={`Scene ${i}`}
            className={i <= stage ? "active" : ""}
            onClick={() => changeStage(i)}
          />
        ))}
      </StrategyProgress>
      <StrategyTitle $size="lg">{children[stage].props.title}</StrategyTitle>
      {cloneElement(children[stage], {
        data,
        addData: (obj) => setData({ ...data, ...obj }),
        setNextStage: () => setStage(stage + 1),
        setPrevStage: () => setStage(stage - 1),
      })}
    </StyledStrategy>
  )
}
