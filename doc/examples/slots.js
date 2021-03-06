const id = 'slots'

const title = 'Slots'

const description = `Each property has \`before\`, \`after\` and \`default\` slots. This is true for object containers, arrays, simple properties, etc. Before and after are handy mostly to display paragraphs of texts, titles, etc. Default can be used to entirely rewrite the way the property is rendered.

You can define any slot of the main underlying Vuetify component for each property (append, prepend, etc.).

All slots are passed either as textual content in a \`x-slots\` annotation in the schema (markdown supported) or as code inside the \`<vjsf />\` element with a prefix matching the key of the property in the schema.`

const schema = {
  type: 'object',
  properties: {
    stringProp1: { type: 'string', title: `I'm a property with Vuetify slots`, 'x-slots': { 'append-outer': 'this is a markdown **slot**' } },
    stringProp2: { type: 'string', title: `I'm a property with a before/after/default slots`, 'x-slots': { after: 'this is a markdown **after slot**' } },
    stringProp3: { type: 'string', title: `I'm a property with a custom display`, 'x-display': 'custom-string1' },
    object1: {
      type: 'object',
      title: 'I am an object containing properties with slots',
      properties: {
        stringProp11: { type: 'string', title: `I'm a nested property with slots`, 'x-slots': { 'append-outer': 'this is a markdown **slot**' } },
        stringProp12: { type: 'string', title: `I'm a nested property with a custom display`, 'x-display': 'custom-string1' }
      }
    }
  }
}

const model = {}

const template = `<v-jsf v-model="model" :schema="schema" :options="options">
  <template slot="stringProp1-prepend">this is a Vuetify code slot</template>
  <template v-slot:stringProp2-before="slotProps">this is a code slot before 2nd property (slot props={{Object.keys(slotProps)}}).</template>
  <template v-slot:stringProp2="{value, on}"><p class="mt-4">this is the default slot of the 2nd property <input type="text" :value="value" v-on="on" style="border:1px solid red;">.</p></template>

  <template v-slot:object1.stringProp11-before="slotProps">this is a code slot before nested property</template>
  <template v-slot:custom-string1="{value, label, on}"><p class="mt-4">{{label}} <input type="text" :value="value" v-on="on" style="border:1px solid green;">.</p></template>
</v-jsf>`

export default { id, title, description, schema, model, template }
