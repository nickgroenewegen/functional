const pipe = (...fns) => fns.reduceRight((a, b) => (...val) => a(b(...val)))

export default pipe
