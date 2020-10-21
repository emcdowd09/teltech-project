<template>
<div class="wrapper">
	<div id="hero">
		<h1>{{ $t('meet_the_team') }}</h1>
	</div>
	<p class="about-us">{{ $t('intro_text') }}</p>
	<p class="who-we-are">{{ $t('this_is_who') }}</p>
	<div v-if="getEmployees.length > 0">
		<div class="filters">
			<div class="filter-wrapper">
				<svg class="magnifier" xmlns="http://www.w3.org/2000/svg" width="22.11" height="22.129" viewBox="0 0 22.11 22.129">
				    <g fill="none" stroke="#383838" stroke-miterlimit="10" transform="translate(.5 .5)">
				        <circle cx="9" cy="9" r="9"/>
				        <path stroke-linecap="square" d="M0 0l5.4 5.422" transform="translate(15.5 15.5)"/>
				    </g>
				</svg>
				<input type="text" class="search-input" v-model="search" :placeholder="$t('search_employees')">
				<svg class="close" @click="search = ''" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" v-if="search.length > 0">
		            <path d="M24 1.414L22.586 0 12 10.586 1.414 0 0 1.414 10.586 12 0 22.586 1.414 24 12 13.414 22.586 24 24 22.586 13.414 12z"/>
		        </svg>
			</div>
			<div class="filter-wrapper" @click="showFilters = !showFilters" v-on-clickaway="hideFilters">
				<svg class="down" xmlns="http://www.w3.org/2000/svg" width="20.551" height="10.728" viewBox="0 0 20.551 10.728">
				    <g>
				        <path fill="#ffc107" d="M19.8 117.408l-9.512 9.513-9.51-9.513a.447.447 0 0 0-.632.632l9.828 9.828a.447.447 0 0 0 .632 0l9.828-9.828a.447.447 0 1 0-.621-.643l-.011.011z" transform="translate(0 -117.272) translate(-.02)"/>
				        <path fill="#383838" d="M10.269 128a.447.447 0 0 1-.316-.13l-9.828-9.828a.447.447 0 0 1 .632-.632l9.513 9.512 9.512-9.513a.447.447 0 0 1 .643.621l-.011.011-9.828 9.828a.447.447 0 0 1-.317.131z" transform="translate(0 -117.272) translate(0 -.001)"/>
				    </g>
				</svg>
				<span>{{ $t('filter_by_department') }}</span>
				<div :class="['filters-list', { 'show-filters' : showFilters }]">
					<input type="checkbox" class="checkbox" v-model="filters.executiveTeam" id="executives">
					<label for="executives" v-if="getExecutiveTeam.length > 0">
						Executive Team ({{getExecutiveTeam.length}})
					</label>

					<input type="checkbox" class="checkbox" v-model="filters.operationsTeam" id="operations">
					<label for="operations" v-if="getOperationsTeam.length > 0">
						Operations Team ({{getOperationsTeam.length}})
					</label>

					<input type="checkbox" class="checkbox" v-model="filters.productTeam" id="product">
					<label for="product" v-if="getProductTeam.length > 0">
						Product Team ({{getProductTeam.length}})
					</label>

					<input type="checkbox" class="checkbox" v-model="filters.marketingTeam" id="marketing">
					<label for="marketing" v-if="getMarketingTeam.length > 0">
						Marketing Team ({{getMarketingTeam.length}})
					</label>

					<input type="checkbox" class="checkbox" v-model="filters.designTeam" id="design">
					<label for="design" v-if="getDesignTeam.length > 0">
						Design Team ({{getDesignTeam.length}})
					</label>

					<input type="checkbox" class="checkbox" v-model="filters.developmentTeam" id="development">
					<label for="development" v-if="getDevelopmentTeam.length > 0">
						Development Team ({{getDevelopmentTeam.length}})
					</label>

					<input type="checkbox" class="checkbox" v-model="filters.dataTeam" id="data">
					<label for="data" v-if="getDataTeam.length > 0">
						Data Team ({{getDataTeam.length}})
					</label>

					<input type="checkbox" class="checkbox" v-model="filters.qaTeam" id="qa">
					<label for="qa" v-if="getQATeam.length > 0">
						QA Team ({{getQATeam.length}})
					</label>
				</div>
			</div>
		</div>
		<div class="hr"></div>
		<div class="employees-wrapper">
			<group :list="getExecutiveTeam" :title="'Executive Team'" @employee="showDetails" v-if="getExecutiveTeam.length > 0 && filters.executiveTeam"></group>
			<group :list="getOperationsTeam" :title="'Operations Team'" @employee="showDetails" v-if="getOperationsTeam.length > 0 && filters.operationsTeam"></group>
			<group :list="getMarketingTeam" :title="'Marketing Team'" @employee="showDetails" v-if="getMarketingTeam.length > 0 && filters.marketingTeam"></group>
			<group :list="getProductTeam" :title="'Product Team'" @employee="showDetails" v-if="getProductTeam.length > 0 && filters.productTeam"></group>
			<group :list="getDesignTeam" :title="'Design Team'" @employee="showDetails" v-if="getDesignTeam.length > 0 && filters.designTeam"></group>
			<group :list="getDevelopmentTeam" :title="'Development Team'" @employee="showDetails" v-if="getDevelopmentTeam.length > 0 && filters.developmentTeam"></group>
			<group :list="getDataTeam" :title="'Data Team'" @employee="showDetails" v-if="getDataTeam.length > 0 && filters.dataTeam"></group>
			<group :list="getQATeam" :title="'QA Team'" @employee="showDetails" v-if="getQATeam.length > 0 && filters.qaTeam"></group>
		</div>
	</div>
	<div class="no-data" v-else>
		<p>Unfortunately, there has been an error fetching employees. Please refresh the page.</p>
	</div>

	<!-- Details Modal -->
	<modal v-if="showDetailsModal" @close="detailsEmployee = null; showDetailsModal = false;">
		<template v-slot:header>
			<div class="avatar" :style="{ backgroundImage: 'url(' + getAvatar(detailsEmployee.image) + ')' }"></div>
			<span class="employee-name">{{ detailsEmployee.name }} {{ detailsEmployee.surname }}</span>
			<span class="employee-title">{{ detailsEmployee.title }}</span>
			<div class="hr"></div>
			<p class="employee-description">{{ detailsEmployee.intro }} <br><br> {{ detailsEmployee.description }}</p>
        </template>
    </modal>
	<!-- End Details Modal -->
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway';
import Modal from '@/components/ModalComponent.vue'
import Group from '@/components/Group.vue'
import { Employee } from '@/store/interfaces/employee'
import { filter } from 'lodash'
export default ({
    name: 'List',
    mixins: [ clickaway ],
    data () {
        return {
        	filters: {
        		executiveTeam: true,
        		operationsTeam: true,
        		productTeam: true,
        		marketingTeam: true,
        		designTeam: true,
        		developmentTeam: true,
        		dataTeam: true,
        		qaTeam: true
        	},
        	search: '',
        	showDetailsModal: false,
        	detailsEmployee: null,
        	showFilters: false
        }
    },
    components: {
    	Modal,
    	Group
    },
    computed: {
        ...mapGetters([
        	'getEmployees'
        ]),
        getExecutiveTeam() {
        	return this.filterEmployees('executive team')
        },
        getOperationsTeam() {
        	return this.filterEmployees('operations')
        },
        getProductTeam() {
        	return this.filterEmployees('product team')
        },
        getMarketingTeam() {
        	return this.filterEmployees('marketing team')
        },
        getDesignTeam() {
        	return this.filterEmployees('design team')
        },
        getDevelopmentTeam() {
        	return this.filterEmployees('development team')
        },
        getDataTeam() {
        	return this.filterEmployees('data team')
        },
        getQATeam() {
        	return this.filterEmployees('quality assurance team')
        }
    },
    mounted() {
    	//parallax effect
    	// @ts-ignore
    	const bodyController = new ScrollMagic.Controller()
    	// @ts-ignore
    	const tween = new TimelineMax().add([TweenMax.to('#hero', 1, { backgroundPosition: '0 -60%', ease: Linear.ease })])
    	// @ts-ignore
    	new ScrollMagic.Scene({ triggerElement: '#hero', duration: '100%', offset: 600})
    		.setTween(tween)
    		.addTo(bodyController)
    },
    methods: {
    	//filter by department and search string
    	filterEmployees(department: String) {
    		return filter(this.getEmployees, (employee: Employee) => {
                if(employee.department === department && ( employee.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 || employee.surname.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 )) {
	            	return employee
	            } 
            })
    	},
    	hideFilters() {
    		this.showFilters = false
    	},
     	getAvatar(img: String) {
    		if(img.length > 0) {
    			return 'https://teltech.co/images/members/' + img + '.jpg'
    		} else {
    			return require('@/assets/images/avatar-placeholder.jpeg')
    		}
    	},
    	//Open details modal
    	showDetails(employee: Employee) {
    		//Google Analytics Custom Event Tracking
    		// @ts-ignore
    		gtag('event', 'click', {
                'event_category': 'Employee Show Details',
                'event_label': employee.name + ' ' + employee.surname
            })

            //activate modal
            this.detailsEmployee  = employee
            this.showDetailsModal = true
    	}
    }
})
</script>
<style lang="scss">
	@import "../assets/scss/variables";
	#hero {
	    width: 100%;
	    height: 600px;
	    background-image: url('~@/assets/images/teltech-header.jpg');
	    background-repeat: no-repeat;
	    background-size: 100%;
	    display: flex;
	    align-items: center;
	    justify-content: center;

	    h1 {
		    font-size: 80px;
		    font-weight: 900;
		    font-stretch: normal;
		    font-style: normal;
		    line-height: 1.2;
		    letter-spacing: normal;
		    color: $white;
		    text-transform: uppercase;
		}

		//Tablet
		@media only screen and (max-width: 1023px) {
			height: 300px;

			h1 {
			    font-size: 50px;
			}
		}

		//Mobile
		@media only screen and (max-width: 767px) {
			height: 200px;

			h1 {
			    font-size: 30px;
			}
		}
	}

	.about-us {
		width: 900px;
		max-width: 90%;
		margin: 80px auto;
		text-align: center;
  		font-size: 20px;
  		font-weight: 500;
  		font-stretch: normal;
  		font-style: normal;
  		line-height: 1.2;
  		letter-spacing: 0.4px;
  		text-align: center;
  		color: $black;
	}

	.who-we-are {
  		font-size: 20px;
  		font-weight: 400;
  		font-stretch: normal;
  		font-style: normal;
  		line-height: 1.2;
  		letter-spacing: 0.4px;
  		text-align: center;
  		color: $black;
  		text-transform: uppercase;
  		margin-bottom: 100px;
	}

	.section-title {
		text-transform: uppercase;
		font-size: 18px;
	}

	.filters {
		display: flex;
		justify-content: center;

		.filter-wrapper {
			position: relative;
			display: flex;
			align-items: center;
			width: 350px;
			max-width: 90%;
			border-radius: 4px;
		  	box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
		  	border: solid 1px rgba(156, 156, 156, 0.51);
		  	background-color: $white;
			padding: 18px 16px;
			box-sizing: border-box;
			margin: 0 20px;

			svg {
				margin-right: 20px;
				width: 30px;
				height: 20px;

				&.close {
					width: 20px;
					height: 20px;
					margin-right: 0px;
					margin-left: 20px;
				}
			}

		  	input, span {
		  		width: 100%;
				position: relative;
				border: none;
  				font-size: 15px;
			  	font-weight: 300;
			  	font-stretch: normal;
			  	font-style: normal;
			  	line-height: 1.6;
			  	letter-spacing: normal;
				color: $black;

				&:focus {
					outline: none;
				}
			}

			&:last-child {
				cursor: pointer;
			}

			.filters-list {
				display: none;
				flex-direction: column;
				position: absolute;
			    top: 100%;
			    left: -1px;
			    width: calc( 100% + 2px);
				box-sizing: border-box;
				box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
				background: $white;
		  		border: solid 1px rgba(156, 156, 156, 0.51);

		  		&.show-filters {
		  			display: flex;
		  		}
			}

			//Mobile
			@media only screen and (max-width: 767px) {
				width: 90%;
				height: 60px;
				&:first-child {
					margin-bottom: 20px;
				}
			}
		}

		//Mobile
		@media only screen and (max-width: 767px) {
			flex-wrap: wrap;
		}
	}

	.hr {
		width: calc(100% - 240px);
		height: 0;
		border: solid 1px $grey;
		margin: 30px auto 60px auto;

		//Tablet
		@media only screen and (max-width: 1023px) {
			width: 728px;
		}

		//Mobile
		@media only screen and (max-width: 767px) {
			width: 90%;
		}
	}

	.no-data {
		display: flex;
		justify-content: center;
		align-items: center;

		p {
			font-size: 20px;
			color: $dark-grey;

			//Tablet and mobile
			@media only screen and (max-width: 1023px) {
				width: 90%;
				text-align: center;
			}
		}
	}

	.group {
		width: calc(100% - 240px);
		margin:0 auto 100px auto;

		h2 {
			font-size: 22px;
			font-weight: 500;
			font-stretch: normal;
			font-style: normal;
			line-height: 1.23;
			letter-spacing: 0.44px;
			text-align: left;
			margin-bottom: 40px;

			//Tablet & Mobile
			@media only screen and (max-width: 1023px) {
				text-align: center;
			}
		}

		.employees-list {
			display: flex;
			flex-wrap: wrap;

			.employee {
				width: calc((100% - 246px) / 3);
				margin: 0 30px 40px 0;
				padding: 30px;
				border-radius: 4px;
			  	box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
			  	border: solid 1px $employee-shadow;
				cursor: pointer;
				transition: all .2s ease-in-out;

				&:nth-child(3n) {
					margin-right: 0;
				}

				.flex {
					display: flex;
				}

				.hr {
					width: 100%;
					border: 0.5px solid $light-grey;
					margin: 20px 0;
				}

				&:hover {
					-webkit-box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.65);
					-moz-box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.65);
					box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.65);
				}

				.employee-data {
					display: flex;
					flex-direction: column;
					flex-grow: 1;

					span {
						display: block;
					}
				}

				.employee-department {
					font-style: italic;
					font-size: 16px;
					font-weight: 300;
					font-stretch: normal;
					font-style: italic;
					line-height: 1.19;
					letter-spacing: 0.32px;
					text-align: left;
					color: $black;
				}

				.employee-intro {
					font-size: 17px;
					font-weight: 400;
					font-stretch: normal;
					font-style: normal;
					line-height: 1.18;
					letter-spacing: 0.34px;
				}

				//Tablet
				@media only screen and (max-width: 1023px) {
					width: calc((100% - 164px) / 2);
					margin: 0 40px 40px 0;

					&:nth-child(2n) {
						margin-right: 0px;
					}

					&:nth-child(3n) {
						margin-right: auto;
					}
				}

				//Mobile
				@media only screen and (max-width: 767px) {
					width: 90%;
					margin: auto auto 40px auto;
				}
			}
		}

		//Tablet
		@media only screen and (max-width: 1023px) {
			width: calc(100% - 40px);
		}
	}
</style>
