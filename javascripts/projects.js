app.project = {
  getCorrectUrl : function (linkUrl) {
    if ($.isArray(linkUrl) && linkUrl.length > 0) {
      linkUrl = linkUrl[0];
    }
    if (linkUrl.indexOf("/") > 0) {
      return linkUrl;
    } else {
      return "https://jboss.org" + linkUrl;
    }
  },
  jbossLink : function (linkUrl) {
    if (linkUrl.indexOf("jboss.org") > 0) {
      return true;
    } else {
      return false;
    }
  },
  projectFilter : function(filters, keyword, container, thumbnailSize) {

    var url = app.dcp.url.project;

    // Pass search params to GTM for analytics
    window.dataLayer = window.dataLayer || [];

    /*
      Keyword
    */
    var keyword = keyword || $('input[name="filter-text"]').val();

    var filters = $.extend(filters, {"keyword": keyword});
    var currentFilters = {};
    var request_data = {};

    var filter_products = $('select[name="filter-products"]');
    if (filter_products.length && filter_products.val() !== "") {
      var product = filter_products.val();
      filters['project'] = app.products[product]['upstream'];
      window.dataLayer.push({ 'product' : product });
    } else {
      window.dataLayer.push({ 'product' : null });
    }

    // sort by sys_title
    filters['sort'] = 'sys_title';

    $.each(filters, function(key, val) {
      // if its empty, remove it from the filters
      if(val != undefined && val.length) {
        currentFilters[key] = val;
      }
    });

    var query = [];

    if(currentFilters['keyword']) {
      window.dataLayer.push({ 'keyword' : query });
      query.push(keyword);
      delete currentFilters['keyword']
    } else {
      window.dataLayer.push({ 'keyword' : null });
    }

    // append loading class to wrapper
    // $("ul.results").addClass('loading');
    $.extend(request_data, currentFilters);
    request_data["query"] = query.join(" AND ");

    window.dataLayer.push({'event': 'projects-search'});

    $.ajax({
      url : url,
      dataType: 'json',
      data : request_data,
      container : container,
      thumbnailSize : thumbnailSize,
      error : function() {
        $('ul.results').html(app.dcp.error_message);
      }
    }).done(function(data){
      var container = this.container || $('ul.results');
      var thumbnailSize = this.thumbnailSize || "200x150";
      app.project.format(data, container, thumbnailSize);
    });
  },
  clearFilters: function($el) {
      var form = $('form.project-filters');
      form[0].reset();
      this.projectFilter();
  },
  fallbackImage: function(el) {
    el.src = app.projects.defaultImage;
  },
  format : function(data, container, thumbnailSize) {
    if (data.responses) {
      var hits = data.responses[0].hits.hits;
    } else {
      var hits = data.hits.hits;
    }

    var projectList = document.querySelector('rhdp-projects');
    projectList.data = hits;
    var html = "";

    // loop over every hit
    for (var i = 0; i < hits.length; i++) {

      var project = new RHDPProjectItem();
      var props = hits[i].fields;

      project.imageUrl = "https://static.jboss.org/" + (props.specialIcon || props.sys_project) + "/images/" + (props.specialIcon || props.sys_project) + "_" + thumbnailSize + ".png";
      project.downloadsLink = props.downloadsLink;
      project.projectName = props.sys_project_name;
      project.sys_url_view = props.sys_url_view;
      project.descriptions = props.description;
      project.docsLink = props.docsLink;
      project.communityLink = props.communityLink;
      project.knowledgebaseLink = props.knowledgeBaseLink;
      project.userForumLink = props.userForumLink;
      project.devForumLink = props.devForumLink;
      project.mailingListLink = props.mailingListLink;
      project.chatLink = props.chatLink;
      project.blogLink = props.blogLink;
      project.issueTracker = props.issueTrackerLink;
      project.jiraLink= props.jiraLink;
      project.srcLink= props.srcLink;
      project.anonymousLink = props.anonymousLink;
      project.commiterLink = props.commiterLink;
      project.fisheyeLink = props.fisheyeLink;
      project.viewvcLink = props.viewvcLink;
      project.githubLink = props.githubLink;
      project.committerGitLink = props.committerGitLink;
      project.buildLink = props.buildLink;
      project.hudsonLink = props.hudsonLink;

      projectList.querySelector('ul.results').appendChild(project);
      // html += project.getTemplateHTML();
    }
    projectList.loading = false;
    // Inject HTML into the DO<
    // if(!html) {
    //   html = "Sorry, no results to display. Please modify your search.";
    // }
    // container.html(html).removeClass('loading');
    container.prev().find("#results-label").html(hits.length);

  }
};

// Event Listeners
$(function() {

  var timeOut;
  $('form.project-filters').on('keyup','input',function(e){
    clearTimeout(timeOut);
    var el = $(this);
    timeOut = setTimeout(function() {
      app.project.projectFilter();
      app.utils.updatePageHash(el);
    }, 300);
  });

  $('form.project-filters').on('submit',function(e) {
    e.preventDefault();
  });

  $('select[name="filter-products"]').on('change', function(e) {
    e.preventDefault();
    var el = $(this);
    app.project.projectFilter();
    app.utils.updatePageHash(el);
  });

  $('.project-filters-clear').on('click',function(e){
    e.preventDefault();
    app.project.clearFilters($(this));
  });

  if ($('.project-filters').length) {
    if (window.location.search) {
      var product_id = app.utils.getQueryVariable('included-in');
      $('option[value="'+product_id+'"]').attr('selected','selected');
      app.project.projectFilter({project: app.products[product_id]['upstream']});
    } else {
      app.project.projectFilter();
    }
  }
  if ($('.community-projects').length) {
    app.project.projectFilter({project: app.products[$('.community-projects').data('product-id')]['upstream']});
  }

  /*
     Upstream Solutions View More Link
   */
  $('ul.results, ul.featured-projects-results').on('click','.upstream-toggle-more',function(e){
    e.preventDefault();
    var el = $(this);

    el.toggleClass('upstream-toggle-open');
    el.prev('.upstream-more-content').slideToggle();
  });

  /*
    Modal Box
  */

  $('ul.results, ul.featured-projects-results').on('click','li.upstream a.solution-overlay-learn',function(e) {
    e.preventDefault();
    var html = $(this).parents('li').find('.project-content').html();
    app.overlay.open(html);
  });

  /*
    Featured Projects
  */

  var featuredProjectIds = $('.featured-project-ids');

  if(featuredProjectIds.length) {
    //var queryVal = JSON.parse(featuredProjectIds.text()).join(' OR ');
    //var query = "sys_content_id:("+queryVal+")";

    //app.project.projectFilter(null, query, $('ul.featured-projects-results'), '500x400');

  }

});

