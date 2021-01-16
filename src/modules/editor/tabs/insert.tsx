import React, { useState } from "react"
import { Radio, Button } from "@geist-ui/react"
export type InsertDirection = "prev" | "next" | "parallel"
type Props = {
  onInert?: (direction: InsertDirection) => void
}
const InsertItem: React.FC<Props> = props => {
  const { onInert } = props
  const [direction, setDirection] = useState<InsertDirection>("prev")
  function onDirectionChange(val: React.ReactText) {
    setDirection(val as InsertDirection)
  }
  function handleInsert() {
    onInert && onInert(direction)
  }
  return (
    <>
      <div className="container">
        <p>Direction: </p>
        <Radio.Group
          value={direction}
          onChange={onDirectionChange}
          useRow
          size="small"
        >
          <Radio value="prev">On prev</Radio>
          <Radio value="next">On next</Radio>
          <Radio value="parallel">On parallel</Radio>
        </Radio.Group>
        <Button onClick={handleInsert}>Insert</Button>
      </div>
      <style jsx>{`
        .container :global(button) {
          margin-top: 24px;
        }
      `}</style>
    </>
  )
}

export default InsertItem