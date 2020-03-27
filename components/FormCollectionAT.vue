<template>
  <section class="form-collection">
    <h2 class="h3">
      Testing Air Table Form
    </h2>
    <div class="form-collection-form-wraper form-wrapper">
      <form
        v-if="!submitted"
        class="form-collection-form form"
        novalidate
        @submit.prevent="formSubmit($event)"
      >
        <fieldset>
          <transition name="form-error">
            <span
              v-show="errors.has('name')"
              class="form-error"
            >
              {{ errors.first('name') }}
            </span>
          </transition>
          <input
            id="name"
            v-model="form.name"
            v-validate="'required'"
            type="text"
            name="name"
            placeholder="Name"
            @focus="start()"
          >
        </fieldset>
        <fieldset>
          <transition name="form-error">
            <span
              v-show="errors.has('email')"
              class="form-error"
            >
              {{ errors.first('email') }}
            </span>
          </transition>
          <input
            id="email"
            v-model="form.email"
            v-validate="'required|email'"
            type="email"
            name="email"
            placeholder="Email Address"
            @focus="start()"
          >
        </fieldset>
        <fieldset>
          <input
            id="city"
            v-model="form.city"
            type="text"
            name="city"
            placeholder="City"
            @focus="start()"
          >
        </fieldset>
        <fieldset>
          <select
            id="state"
            v-model="form.state"
            name="state"
            @focus="start()"
          >
            <option
              value=""
              selected="selected"
            >
              State
            </option>
            <option
              value="AL"
            >
              Alabama
            </option>
            <option
              value="AK"
            >
              Alaska
            </option>
            <option
              value="AZ"
            >
              Arizona
            </option>
            <option
              value="AR"
            >
              Arkansas
            </option>
            <option
              value="CA"
            >
              California
            </option>
            <option
              value="CO"
            >
              Colorado
            </option>
            <option
              value="CT"
            >
              Connecticut
            </option>
            <option
              value="DE"
            >
              Delaware
            </option>
            <option
              value="DC"
            >
              District Of Columbia
            </option>
            <option
              value="FL"
            >
              Florida
            </option>
            <option
              value="GA"
            >
              Georgia
            </option>
            <option
              value="HI"
            >
              Hawaii
            </option>
            <option
              value="ID"
            >
              Idaho
            </option>
            <option
              value="IL"
            >
              Illinois
            </option>
            <option
              value="IN"
            >
              Indiana
            </option>
            <option
              value="IA"
            >
              Iowa
            </option>
            <option
              value="KS"
            >
              Kansas
            </option>
            <option
              value="KY"
            >
              Kentucky
            </option>
            <option
              value="LA"
            >
              Louisiana
            </option>
            <option
              value="ME"
            >
              Maine
            </option>
            <option
              value="MD"
            >
              Maryland
            </option>
            <option
              value="MA"
            >
              Massachusetts
            </option>
            <option
              value="MI"
            >
              Michigan
            </option>
            <option
              value="MN"
            >
              Minnesota
            </option>
            <option
              value="MS"
            >
              Mississippi
            </option>
            <option
              value="MO"
            >
              Missouri
            </option>
            <option
              value="MT"
            >
              Montana
            </option>
            <option
              value="NE"
            >
              Nebraska
            </option>
            <option
              value="NV"
            >
              Nevada
            </option>
            <option
              value="NH"
            >
              New Hampshire
            </option>
            <option
              value="NJ"
            >
              New Jersey
            </option>
            <option
              value="NM"
            >
              New Mexico
            </option>
            <option
              value="NY"
            >
              New York
            </option>
            <option
              value="NC"
            >
              North Carolina
            </option>
            <option
              value="ND"
            >
              North Dakota
            </option>
            <option
              value="OH"
            >
              Ohio
            </option>
            <option
              value="OK"
            >
              Oklahoma
            </option>
            <option
              value="OR"
            >
              Oregon
            </option>
            <option
              value="PA"
            >
              Pennsylvania
            </option>
            <option
              value="RI"
            >
              Rhode Island
            </option>
            <option
              value="SC"
            >
              South Carolina
            </option>
            <option
              value="SD"
            >
              South Dakota
            </option>
            <option
              value="TN"
            >
              Tennessee
            </option>
            <option
              value="TX"
            >
              Texas
            </option>
            <option
              value="UT"
            >
              Utah
            </option>
            <option
              value="VT"
            >
              Vermont
            </option>
            <option
              value="VA"
            >
              Virginia
            </option>
            <option
              value="WA"
            >
              Washington
            </option>
            <option
              value="WV"
            >
              West Virginia
            </option>
            <option
              value="WI"
            >
              Wisconsin
            </option>
            <option
              value="WY"
            >
              Wyoming
            </option>
          </select>
        </fieldset>
        <fieldset>
          <transition name="form-error">
            <span
              v-show="errors.has('message')"
              class="form-error"
            >
              {{ errors.first('message') }}
            </span>
          </transition>
          <textarea
            id="message"
            v-model="form.message"
            v-validate="'required'"
            name="message"
            placeholder="Your Message"
            @focus="start()"
          />
        </fieldset>
        <div class="submit-button">
          <button type="submit" class="button">
            <span v-if="!submitting">
              Submit
            </span>
            <span v-if="submitting">
              Submitting...
            </span>
          </button>
        </div>
      </form>
      <transition name="form-submit">
        <div
          v-if="submitted"
          :class="{
            'lead-collection-form__mask form-mask': true,
            'lead-collection-form__mask--success form-mask--success': submitted
          }"
        >
          <div>
            Thanks!
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import Airtable from 'airtable'
import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(VeeValidate, {
  classes: true,
  aria: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

const dict = {
  custom: {
    name: {
      required: () => 'The name field is required.'
    },
    email: {
      required: () => 'Your Email Address is required.'
    },
    message: {
      required: () => 'Please include a brief message.'
    }
  }
}

Validator.localize('en', dict)

export default {
  name: 'FormCollectionAT',
  props: {
    dbCollection: {
      type: String,
      required: true,
      default: 'Nuxt Base Collection Test'
    },
    siteKey: {
      type: String,
      required: true,
      default: '6Le-940UAAAAAAgnWJwbfxpTOA4DQ3e-gQ7akxOC'
    },
    mailTo: {
      type: String,
      required: false,
      default: ''
    },
    mailFrom: {
      type: String,
      required: false,
      default: 'noreply@seacuisine.com'
    },
    atApi: {
      type: String,
      required: false,
      default: 'keyeKovmQLeCAOEJ3'
    },
    atBaseKey: {
      type: String,
      required: false,
      default: 'appGZXbK0j0tjEpqU'
    }
  },
  data () {
    return {
      form: {
      },
      emailIsValid: false,
      submitAttempted: false,
      formTitle: 'Testing Nuxt Form',
      submitting: false, // submit first state
      submitted: false, // submit final state
      formHash: this.generatedUID(),
      formFocusCount: 0
    }
  },
  methods: {
    generatedUID () {
    // I generate the UID from two parts here
    // to ensure the random number provide enough bits.
      let firstPart = (Math.random() * 46656) | 0
      let secondPart = (Math.random() * 46656) | 0
      firstPart = ('000' + firstPart.toString(36)).slice(-3)
      secondPart = ('000' + secondPart.toString(36)).slice(-3)
      return firstPart + secondPart
    },
    formSubmit (e) {
      e.preventDefault()
      // const value = e.currentValue
      // const value = JSON.stringify(this)
      // const email = this.$refs.email.value
      // const email = this.form.email
      window.dataLayer.push({
        'event': 'genericEvent',
        'eventCat': 'Form Collection AT',
        'eventAction': 'submit attempt',
        'eventLabel': this.formHash
      })
      this.submitAttempted = true
      this.$validator.validate().then((valid) => {
        // console.log('valid', valid)
        if (valid) {
          this.submitting = true
        }
      })
    },
    submit () {
      console.log('submitting', this)
      this.postMessage()
    },
    async postMessage () {
      const context = this
      // console.log('form', context.form)
      // console.log('cresponse', this.cloudResponse)
      // console.log('fileURL', this.cloudResponse.url)
      const base = await new Airtable({ apiKey: this.atApi }).base(this.atBaseKey)
      base('Contact').create({
        'Name': this.form.name,
        'Email': this.form.email,
        'City': this.form.city,
        'State': this.form.state,
        'Message': this.form.message
      }, function (error, record) {
        if (error) {
          // console.error(err)
          // TODO: Real Error ?
          alert('Form Error, please try e-mailing us instead.')
          window.dataLayer.push({
            'event': 'genericEvent',
            'eventCat': 'Form Collection AT',
            'eventAction': 'db error: ' + error.message,
            'eventLabel': context.formHash
          })
          return false
        }
        window.dataLayer.push({
          'event': 'genericEvent',
          'eventCat': 'Form Collection AT',
          'eventAction': 'success db',
          'eventLabel': context.formHash
        })
        if (context.mailTo.length > 0) {
          context.postEmail()
        } else {
          context.success()
        }
        // context.success()
        // console.log(record.getId())
      })
    },
    postEmail () {
      const emailContent = this.constructEmail()
      console.log(emailContent)
      this.axios.post(
        '//emaillog.marlinnetwork.com/Api/SendMessage',
        JSON.stringify(emailContent),
        { responseType: 'json', headers: { 'Content-Type': 'application/json' } }
      ).then((response) => {
        window.dataLayer.push({
          'event': 'genericEvent',
          'eventCat': 'Form Collection AT',
          'eventAction': 'success mail',
          'eventLabel': this.formHash
        })
        this.success()
        // console.log('email success')
      }, (e) => {
        // error callback
        // console.error('email error')
        window.dataLayer.push({
          'event': 'genericEvent',
          'eventCat': 'Form Collection AT',
          'eventAction': 'mail error: ' + e.message,
          'eventLabel': this.formHash
        })
      })
    },
    constructEmail () {
      let constructedHtml = ''
      constructedHtml += `<h1>` + this.formTitle + `</h1>`
      for (const item in this.form) { // eslint-disable-line no-unused-vars
        constructedHtml += item + `: ` + this.form[item] + `<br>`
      }
      console.log(this.mailFrom, this.mailTo)
      return {
        from: this.mailFrom,
        replyto: this.form.email,
        to: this.mailTo,
        subject: 'Testing Contact Form Submission',
        html: constructedHtml
      }
    },
    success () {
      this.submitting = false
      this.submitted = true
      // if (process.browser) {
      //   // document.getElementsByTagName('body').classList.add('lock')
      //   setTimeout(() => {
      //     document.getElementById('thanks').scrollIntoView({ behavior: 'smooth' })
      //   }, 1000)
      // }
    },
    start () {
      if (this.formFocusCount <= 0) {
        window.dataLayer.push({
          'event': 'genericEvent',
          'eventCat': 'Form Collection AT',
          'eventAction': 'started',
          'eventLabel': this.formHash
        })
        this.formFocusCount++
      }
    }
  }
}

</script>
