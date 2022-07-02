
export const mqVal = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
}

const mq = {
    xsv: mqVal.xs,
    smv: mqVal.sm,
    mdv: mqVal.md,
    lgv: mqVal.lg,
    xlv: mqVal.xl,
    xs:`@media (min-width: ${mqVal.xs}px)`, 
    sm:`@media (min-width: ${mqVal.sm}px)`, 
    md:`@media (min-width: ${mqVal.md}px)`, 
    lg:`@media (min-width: ${mqVal.lg}px)`, 
    xl:`@media (min-width: ${mqVal.xl}px)`, 
}

export default mq;