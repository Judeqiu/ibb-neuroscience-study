// ===== Flashcard Deck =====
var FLASHCARD_DECK = [
  // Chapter 1: Neurohistology
  {
    front: 'What are the four types of CNS glial cells and their primary functions?',
    back: '<strong>Astrocytes</strong> — recycle neurotransmitters, maintain ionic balance, form blood-brain barrier<br><strong>Oligodendrocytes</strong> — myelinate MULTIPLE CNS axons<br><strong>Microglia</strong> — immune defense<br><strong>Ependyma</strong> — line ventricles, circulate CSF',
    image: null,
    chapter: 'Neurohistology'
  },
  {
    front: 'How does myelination differ between the CNS and PNS?',
    back: '<strong>CNS:</strong> One <strong>oligodendrocyte</strong> myelinates <em>multiple</em> axons. No basal lamina. More glycolipid.<br><strong>PNS:</strong> One <strong>Schwann cell</strong> myelinates <em>one</em> axon segment. Has basal lamina + endoneurium. More phospholipid.',
    image: 'images/flashcard-myelin.jpg',
    chapter: 'Neurohistology'
  },
  {
    front: 'What are the three structural components of a neuron?',
    back: '1. <strong>Cell body (soma)</strong> — contains nucleus and Nissl bodies (RER)<br>2. <strong>Dendrites</strong> — receive input, have dendritic spines<br>3. <strong>Axon</strong> — conducts action potentials, <em>lacks</em> Nissl bodies, may be myelinated or unmyelinated',
    image: null,
    chapter: 'Neurohistology'
  },
  // Chapter 2: Development
  {
    front: 'How does the neural tube form, and what does the neural crest become?',
    back: '<strong>Neural plate</strong> (ectoderm) curls → <strong>neural tube</strong> (→ CNS).<br>Cells from dorsal tube break away as <strong>neural crest</strong> → <strong>PNS</strong>, melanocytes, facial bones/muscles.<br>Ventral: <strong>Shh</strong> → basal plate (motor). Dorsal: <strong>BMP/Wnt</strong> → alar plate (sensory).',
    image: 'images/flashcard-neuraltube.jpg',
    chapter: 'Development'
  },
  {
    front: 'What are neuromeres, and how many does each brain region have?',
    back: 'Neuromeres are transverse segments defined by gene expression:<br><strong>Forebrain:</strong> 5 (incl. hypothalamus + 3 prosomeres)<br><strong>Midbrain:</strong> 2 (m1, m2)<br><strong>Hindbrain:</strong> 12 (isthmus + 11 rhombomeres r1–r11)<br>Rhombomeres r2–r11 defined by <strong>Hox genes</strong>.',
    image: null,
    chapter: 'Development'
  },
  {
    front: 'What developmental insults affect the nervous system, and how can they be prevented?',
    back: '<table><tr><th>Insult</th><th>Effect</th><th>Prevention</th></tr><tr><td>Folate deficiency</td><td>Spina bifida</td><td>Folate supplement</td></tr><tr><td>Alcohol</td><td>Fetal alcohol syndrome</td><td>Avoid in first 8 weeks</td></tr><tr><td>Rubella</td><td>Deafness, blindness</td><td>Vaccination</td></tr><tr><td>Iodine deficiency</td><td>Hypothyroidism</td><td>Iodized salt</td></tr></table>',
    image: null,
    chapter: 'Development'
  },
  // Chapter 3: Neuroanatomy
  {
    front: 'Describe the internal organization of the spinal cord grey matter.',
    back: 'Butterfly-shaped, 6 functional regions:<br><strong>Dorsal horn</strong> (laminae 1–4) — sensory<br><strong>Ventral horn</strong> (laminae 7–9) — motor; lamina 9 = limb/trunk motor neurons<br><strong>Lamina 5</strong> — pattern generators<br><strong>Lamina 6</strong> — small, not at all levels',
    image: null,
    chapter: 'Neuroanatomy'
  },
  {
    front: 'Why does the cerebellum have an ipsilateral connection with the body?',
    back: '<strong>Double decussation:</strong><br>1. Cerebellar output → <strong>superior cerebellar peduncle</strong> crosses in midbrain<br>2. <strong>Corticospinal tract</strong> crosses at pyramidal decussation<br>Two crossings bring control back to the <strong>same side</strong>.<br>→ Cerebellar damage causes <em>ipsilateral</em> symptoms.',
    image: 'images/flashcard-spinalcord.jpg',
    chapter: 'Neuroanatomy'
  },
  {
    front: 'Name the three cerebellar peduncles and their contents.',
    back: '<strong>Inferior</strong> (entering): spinal cord + inferior olive fibers<br><strong>Middle</strong> (entering): pontine nuclei fibers (massive)<br><strong>Superior</strong> (leaving): output to red nucleus + thalamus<br><br>Mnemonic: <em>In Comes Spinach, Mid Comes Pontine, Superior Sends Out</em>',
    image: null,
    chapter: 'Neuroanatomy'
  },
  // Chapter 4: Functional Systems
  {
    front: 'Compare the dorsal column pathway and the spinothalamic tract.',
    back: '<table><tr><th></th><th>Dorsal Column</th><th>Spinothalamic</th></tr><tr><td>Carries</td><td>Touch, vibration, proprioception</td><td>Pain, temperature, crude touch</td></tr><tr><td>Crosses at</td><td><strong>Hindbrain</strong> (internal arcuate fibers)</td><td><strong>Spinal cord</strong> (anterior white commissure)</td></tr><tr><td>Synapses</td><td>Gracile/cuneate nuclei</td><td>Substantia gelatinosa</td></tr></table>',
    image: null,
    chapter: 'Functional Systems'
  },
  {
    front: 'Describe the course of the corticospinal tract.',
    back: 'Primary motor cortex (precentral gyrus) → <strong>internal capsule</strong> → cerebral peduncle → basilar pons → <strong>medullary pyramid</strong> → <strong>pyramidal decussation</strong> (crosses) → spinal cord (laminae 5–7, 9)<br><br>Controls <strong>fine distal limb movements</strong>. Internal capsule is common stroke site.',
    image: 'images/flashcard-corticospinal.jpg',
    chapter: 'Functional Systems'
  },
  {
    front: 'Compare sympathetic and parasympathetic divisions.',
    back: '<table><tr><th></th><th>Sympathetic</th><th>Parasympathetic</th></tr><tr><td>Origin</td><td>T1–L2</td><td>Brainstem + S2–S4</td></tr><tr><td>Ganglia</td><td>Paravertebral chain</td><td>Near target organ</td></tr><tr><td>Preganglionic</td><td>Short, ACh</td><td>Long, ACh</td></tr><tr><td>Postganglionic</td><td>Long, <strong>Noradrenaline</strong></td><td>Short, <strong>ACh</strong></td></tr><tr><td>Function</td><td>Fight or flight</td><td>Rest and digest</td></tr></table>',
    image: 'images/flashcard-ans.jpg',
    chapter: 'Functional Systems'
  },
  // Chapter 5: Clinical Neurology
  {
    front: 'How do you distinguish spastic (UMN) from flaccid (LMN) paralysis?',
    back: '<table><tr><th></th><th>Spastic</th><th>Flaccid</th></tr><tr><td>Lesion</td><td>Corticospinal tract</td><td>Motor neuron/axon</td></tr><tr><td>Tone</td><td><strong>↑ Increased</strong></td><td><strong>↓ Decreased</strong></td></tr><tr><td>Reflexes</td><td>Hyperreflexia</td><td>Hypo-/areflexia</td></tr><tr><td>Babinski</td><td><strong>Present</strong></td><td>Absent</td></tr><tr><td>Atrophy</td><td>Mild</td><td><strong>Present</strong></td></tr></table>',
    image: null,
    chapter: 'Clinical Neurology'
  },
  {
    front: 'What are the hallmark features of Parkinson\'s disease?',
    back: 'Cause: <strong>Loss of dopaminergic neurons</strong> in <strong>substantia nigra</strong> (pars compacta)<br><br>Cardinal signs:<br>• <strong>Resting tremor</strong> — disappears with movement<br>• <strong>Rigidity</strong> (cogwheel)<br>• <strong>Bradykinesia/Akinesia</strong><br>• <strong>Postural instability</strong><br><br>Treatment: <strong>L-DOPA</strong>; deep brain stimulation of subthalamic nucleus or zona incerta.',
    image: null,
    chapter: 'Clinical Neurology'
  },
  {
    front: 'Compare Multiple Sclerosis and Alzheimer\'s disease pathology.',
    back: '<strong>Multiple Sclerosis:</strong><br>• Autoimmune attack on <strong>oligodendrocytes</strong> → CNS demyelination<br>• Relapsing-remitting course<br>• MRI: plaques; CSF: oligoclonal bands<br><br><strong>Alzheimer\'s disease:</strong><br>• Begins in <strong>hippocampus</strong> → memory loss<br>• <strong>Amyloid-β plaques</strong> (extracellular)<br>• <strong>Neurofibrillary tangles</strong> (hyperphosphorylated tau, intracellular)',
    image: null,
    chapter: 'Clinical Neurology'
  }
];
