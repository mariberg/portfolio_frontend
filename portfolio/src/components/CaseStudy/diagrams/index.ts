import type { ComponentType } from 'react'
import GardeningDiagram from './GardeningDiagram'
import TilawaDiagram from './TilawaDiagram'
import OakBedrockDiagram from './OakBedrockDiagram'
import StockManagementDiagram from './StockManagementDiagram'

export const diagramRegistry: Record<string, ComponentType> = {
  'gardening-assistant': GardeningDiagram,
  'tilawa': TilawaDiagram,
  'oak-bedrock': OakBedrockDiagram,
  'stock-management': StockManagementDiagram,
}
