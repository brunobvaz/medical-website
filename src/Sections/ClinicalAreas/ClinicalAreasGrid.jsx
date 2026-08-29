import { InteractiveClinicalAreaCard } from '../../componentes/CARDS/index.js'

export default function ClinicalAreasGrid({
  activeAreaSlug,
  areas,
  labels,
  onActivate,
  onToggle,
}) {
  return (
    <div className="clinical-areas-section__cards">
      {areas.map((area, index) => (
        <InteractiveClinicalAreaCard
          area={area}
          collapseLabel={labels.collapseLabel}
          expandLabel={labels.expandLabel}
          isActive={activeAreaSlug === area.slug}
          linkLabel={labels.linkLabel}
          number={index + 1}
          onActivate={() => onActivate(area.slug)}
          onToggle={() => onToggle(area.slug)}
          key={area.slug}
        />
      ))}
    </div>
  )
}
